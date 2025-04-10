# 🎬 MovieMania


**MovieMania** is your one-stop destination for discovering trending, top-rated, and upcoming movies and TV shows. Browse through an elegant UI powered by data from The Movie Database (TMDb), and explore detailed information about your favorite titles.

🌐 Live Site: [moviemania-opal.vercel.app](https://moviemania-opal.vercel.app)

---

## 📌 Features

- 🔍 **Search Functionality** – Search for movies and TV shows instantly
- 🎥 **Trending Content** – View what's trending today or this week
- 🏆 **Top Rated** – Explore the highest-rated titles
- 🆕 **In Theatres & Upcoming** – Stay up-to-date with what's new
- 📺 **TV Show Categories** – Discover what's popular in TV shows
- 📱 **Responsive Design** – Mobile-friendly layout with Tailwind CSS

---

## 🛠️ Tech Stack

| Area         | Technology            |
|--------------|------------------------|
| Frontend     | Next.js               |
| Styling      | Tailwind CSS          |
| API          | TMDb (The Movie Database) API |
| Hosting      | Vercel                |

---

## 🚀 Installation

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prabesh001/moviemania.git
   cd moviemania
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add your TMDb API key:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   ```

   > 🔑 You can get an API key by signing up at [TMDb Developer Portal](https://developer.themoviedb.org/docs/getting-started).

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](https://i.ibb.co/Jj7HWWDm/moviemania-opal-vercel-app.png)

---

## 📁 Folder Structure

```
/components     → Reusable UI components
/pages          → Route-based pages (Next.js)
/public         → Static assets
/styles         → Global styles (Tailwind-based)
utils/          → API configs and helper functions
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [TMDb API](https://www.themoviedb.org/) for movie data
- [Next.js](https://nextjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

## 👤 Author

**Prabesh**  
GitHub: [@Prabesh001](https://github.com/Prabesh001)

---

> Built with for the purpose of browsing the movie and tv shows while learning the use of custom hook.
