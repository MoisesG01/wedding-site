import { useState, useEffect, useRef, useCallback } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detectar se é mobile na inicialização
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const audioRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Função simples para reproduzir
  const playAudio = useCallback(async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = isMobile ? 0.1 : volume;
        audioRef.current.muted = false;
        setIsMuted(false);
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay bloqueado:", error);
        setShowControls(true);
      }
    }
  }, [volume, isMobile]);

  // Função para pausar/retomar
  const togglePlayPause = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await playAudio();
      }
    }
  };

  // Função para mutar/desmutar
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Função para ajustar volume
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    // Se estava mutado e agora tem volume, desmutar
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };

  // Efeito para sincronizar mute com o elemento de áudio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Efeito para tentar reproduzir automaticamente
  useEffect(() => {
    const timer = setTimeout(() => {
      playAudio();
    }, 1000);

    return () => clearTimeout(timer);
  }, [playAudio]);

  // Efeito para detectar interação do usuário em mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        playAudio();
      }
    };

    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });
    document.addEventListener("click", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
    };
  }, [isPlaying, playAudio, isMobile]);

  // Efeito para detectar quando mudar as cores do player
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Detectar se está no footer (fundo escuro)
      const footer = document.querySelector("footer");
      let isInFooter = false;

      if (footer) {
        const footerTop = footer.offsetTop;
        if (scrollPosition >= footerTop - 400) {
          isInFooter = true;
        }
      }

      // Se estiver no footer, usar cores para fundo escuro
      if (isInFooter) {
        setActiveSection("footer");
      }
      // Se estiver na seção home (apenas o hero), usar cores claras
      else if (scrollPosition < 100) {
        setActiveSection("home");
      }
      // Para todas as outras seções (incluindo quando aparece o divisor), usar cores escuras
      else {
        setActiveSection("content");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Limpar timeout se existir
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Efeito para configurar o áudio quando o componente monta
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume;
      audioElement.loop = true; // Reproduz em loop

      // Event listeners para o áudio
      const handleEnded = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioElement.addEventListener("ended", handleEnded);
      audioElement.addEventListener("play", handlePlay);
      audioElement.addEventListener("pause", handlePause);

      return () => {
        audioElement.removeEventListener("ended", handleEnded);
        audioElement.removeEventListener("play", handlePlay);
        audioElement.removeEventListener("pause", handlePause);
      };
    }
  }, [volume]);

  return (
    <>
      {/* Elemento de áudio */}
      <audio
        ref={audioRef}
        preload="metadata"
        loop
        playsInline
        webkit-playsinline="true"
        muted={isMuted}
      >
        <source src="/musica-fundo.mp3" type="audio/mpeg" />
        <source src="/musica-fundo.ogg" type="audio/ogg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* Controles de áudio */}
      <div
        className="fixed bottom-20 right-4 z-30 flex flex-col items-end space-y-2"
        onMouseLeave={() => {
          // Sumir quando sair da área toda
          hideTimeoutRef.current = setTimeout(
            () => setShowControls(false),
            600
          );
        }}
        onMouseEnter={() => {
          // Cancelar timeout quando entrar na área
          if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
          }
        }}
      >
        {/* Botão principal de música */}
        <button
          onClick={togglePlayPause}
          onMouseEnter={() => {
            setShowControls(true);
          }}
          className={`w-12 h-12 backdrop-blur-md border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
            activeSection === "home"
              ? "bg-white/20 border-white/30 text-white hover:bg-white/30"
              : activeSection === "footer"
              ? "bg-white/20 border-white/30 text-white hover:bg-white/30"
              : "bg-gray-800/20 border-gray-600/30 text-gray-800 hover:bg-gray-800/30"
          }`}
          title={isPlaying ? "Pausar música" : "Reproduzir música"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Controles expandidos */}
        {showControls && (
          <div
            className={`backdrop-blur-md border rounded-2xl p-3 space-y-2 min-w-[200px] ${
              activeSection === "home"
                ? "bg-white/20 border-white/30"
                : activeSection === "footer"
                ? "bg-white/20 border-white/30"
                : "bg-gray-800/20 border-gray-600/30"
            }`}
            onMouseLeave={() => {
              // Delay para dar tempo de clicar
              hideTimeoutRef.current = setTimeout(
                () => setShowControls(false),
                800
              );
            }}
          >
            {/* Controle de volume */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className={`transition-colors ${
                  activeSection === "home"
                    ? "text-white hover:text-pink-200"
                    : activeSection === "footer"
                    ? "text-white hover:text-pink-200"
                    : "text-gray-800 hover:text-pink-600"
                }`}
                title={isMuted ? "Desmutar" : "Mutar"}
              >
                {isMuted ? (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.816a1 1 0 011-.108zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4-3.816a1 1 0 011-.108zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className={`flex-1 h-1 rounded-lg appearance-none cursor-pointer slider ${
                  activeSection === "home"
                    ? "bg-white/30"
                    : activeSection === "footer"
                    ? "bg-white/30"
                    : "bg-gray-600/30"
                }`}
                style={{
                  background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${
                    (isMuted ? 0 : volume) * 100
                  }%, ${
                    activeSection === "home"
                      ? "rgba(255,255,255,0.3)"
                      : activeSection === "footer"
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(75,85,99,0.3)"
                  } ${(isMuted ? 0 : volume) * 100}%, ${
                    activeSection === "home"
                      ? "rgba(255,255,255,0.3)"
                      : activeSection === "footer"
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(75,85,99,0.3)"
                  } 100%)`,
                }}
              />
            </div>

            {/* Indicador de status */}
            <div
              className={`text-xs text-center ${
                activeSection === "home"
                  ? "text-white/80"
                  : activeSection === "footer"
                  ? "text-white/80"
                  : "text-gray-700/80"
              }`}
            >
              {isPlaying ? "🎵 Tocando" : "⏸️ Pausado"}
            </div>
          </div>
        )}
      </div>

      {/* Estilos para o slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ec4899;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
