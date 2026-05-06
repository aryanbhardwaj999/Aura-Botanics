import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        account: resolve(__dirname, 'account.html'),
        article: resolve(__dirname, 'article.html'),
        auth: resolve(__dirname, 'auth.html'),
        blog: resolve(__dirname, 'blog.html'),
        cart: resolve(__dirname, 'cart.html'),
        events: resolve(__dirname, 'events.html'),
        product: resolve(__dirname, 'product.html'),
        shop: resolve(__dirname, 'shop.html'),
        support: resolve(__dirname, 'support.html'),
        wishlist: resolve(__dirname, 'wishlist.html'),
      },
    },
  },
});
