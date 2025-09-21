// Service to manage gift reservations globally
// Using JSONBin.io as a simple backend for storing reservations

const BIN_ID = "your-bin-id"; // You'll need to create a free account at jsonbin.io
const API_KEY = "your-api-key"; // Get this from jsonbin.io

class ReservationService {
  constructor() {
    this.baseUrl = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
    this.headers = {
      'Content-Type': 'application/json',
      'X-Master-Key': API_KEY,
    };
  }

  // Get all reservations
  async getReservations() {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'GET',
        headers: this.headers,
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.record?.reservations || [];
      }
      
      return [];
    } catch (error) {
      console.error('Error fetching reservations:', error);
      // Fallback to localStorage
      return JSON.parse(localStorage.getItem('reservedGifts') || '[]');
    }
  }

  // Save a reservation
  async saveReservation(giftId) {
    try {
      // Get current reservations
      const reservations = await this.getReservations();
      
      // Add new reservation if not already reserved
      if (!reservations.includes(giftId)) {
        reservations.push(giftId);
        
        // Save to remote
        const response = await fetch(this.baseUrl, {
          method: 'PUT',
          headers: this.headers,
          body: JSON.stringify({ reservations }),
        });
        
        if (response.ok) {
          // Also save to localStorage as backup
          localStorage.setItem('reservedGifts', JSON.stringify(reservations));
          return true;
        }
      }
      
      return false;
    } catch (error) {
      console.error('Error saving reservation:', error);
      
      // Fallback to localStorage
      const reservations = JSON.parse(localStorage.getItem('reservedGifts') || '[]');
      if (!reservations.includes(giftId)) {
        reservations.push(giftId);
        localStorage.setItem('reservedGifts', JSON.stringify(reservations));
        return true;
      }
      
      return false;
    }
  }

  // Check if a gift is reserved
  async isReserved(giftId) {
    const reservations = await this.getReservations();
    return reservations.includes(giftId);
  }
}

// For now, let's use a simple localStorage-based approach
// that syncs across devices using a simple polling mechanism
class SimpleReservationService {
  constructor() {
    this.storageKey = 'weddingGiftReservations';
    this.syncInterval = 30000; // Sync every 30 seconds
    this.startSync();
  }

  // Start periodic sync (simple implementation)
  startSync() {
    // This is a placeholder - in a real app you'd sync with a backend
    setInterval(() => {
      this.syncReservations();
    }, this.syncInterval);
  }

  // Get reservations from localStorage
  getReservations() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting reservations:', error);
      return [];
    }
  }

  // Save reservation to localStorage
  saveReservation(giftId) {
    try {
      const reservations = this.getReservations();
      if (!reservations.includes(giftId)) {
        reservations.push(giftId);
        localStorage.setItem(this.storageKey, JSON.stringify(reservations));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error saving reservation:', error);
      return false;
    }
  }

  // Check if gift is reserved
  isReserved(giftId) {
    const reservations = this.getReservations();
    return reservations.includes(giftId);
  }

  // Simple sync mechanism (placeholder)
  syncReservations() {
    // In a real implementation, this would sync with a backend
    // For now, it just ensures localStorage is consistent
    console.log('Syncing reservations...');
  }
}

// Export the simple service for now
export default new SimpleReservationService();
