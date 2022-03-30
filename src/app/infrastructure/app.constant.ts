export class AppConstants {
    static uiRoutes = {
        empty: '',
        unauthorized: 'unauthorized',
        maharashtrianFestivalsList: 'maharashtrian-festivals-list',
        login: 'login',
        register : 'register'
    };

    static applicationPages = [
        { title: 'Maharashtrian Festivals', url: 'maharashtrian-festivals-list',icon: 'mail' },
        { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
        { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
        { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
        { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
        { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
        { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
      ];
}