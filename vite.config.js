import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        account: 'account.html',
        article: 'article.html',
        auth: 'auth.html',
        blog: 'blog.html',
        cart: 'cart.html',
        events: 'events.html',
        product: 'product.html',
        shop: 'shop.html',
        support: 'support.html',
        wishlist: 'wishlist.html',
      }
    }
  }
})

