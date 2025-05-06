
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

| Area         | Technology                  |
|--------------|------------------------------|
| Frontend     | Next.js                     |
| Styling      | Tailwind CSS                |
| API          | TMDb (The Movie Database) API |
| Hosting      | Vercel                      |

---

## 🌐 API Configuration

| Key         | Value |
|-------------|-------|
| **Base URL**    | `https://api.themoviedb.org/3` |
| **Image URL**   | `https://image.tmdb.org/t/p/original` |

---

## 🔗 API Routes Used

Below are the TMDb API routes used in this project:

| API Route | Description |
|-----------|-------------|
| `/trending/{media_type}/{time_window}` | Trending movies or TV shows for a given day or week |
| `/movie/popular` | Popular movies |
| `/movie/top_rated` | Top rated movies |
| `/movie/upcoming` | Upcoming movies |
| `/tv/popular` | Popular TV shows |
| `/tv/top_rated` | Top rated TV shows |
| `/tv/on_the_air` | Currently airing TV shows |
| `/search/multi?query={query}` | Search for movies, TV shows, and people |
| `/movie/{movie_id}` | Movie details |
| `/tv/{tv_id}` | TV show details |
| `/movie/{movie_id}/videos` | Videos (trailers, teasers) for a movie |
| `/tv/{tv_id}/videos` | Videos for a TV show |
| `/movie/{movie_id}/credits` | Cast and crew for a movie |
| `/tv/{tv_id}/credits` | Cast and crew for a TV show |
| `/movie/{movie_id}/similar` | Similar movies |
| `/tv/{tv_id}/similar` | Similar TV shows |
| `/genre/movie/list` | Movie genres |
| `/genre/tv/list` | TV genres |

> All routes require the `api_key` parameter.

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


## 📂 Application Routes `Pages`

These are the main routes used in the application:

| Route              | Description                            |
|--------------------|----------------------------------------|
| `/`                | Home – Shows trending movies & TV shows |
| `/explore/movies`  | All Movies                             |
| `/explore/tv`      | All TV Shows                           |
| `/movie/[id]`      | Movie Detail Page                      |
| `/tv/[id]`         | TV Show Detail Page                    |
| `/search/[name]`   | Search Page                            |
| `/person/[id]`     | Person Detail Page                     |

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

## 📸 Screenshots

### 🏠 Homepage
![Homepage](https://github.com/Prabesh001/moviemania/blob/master/public/screenshots/landing-page.png?raw=true)

### 🍿 Movie Detail Page
![Movie Detail Page](https://github.com/Prabesh001/moviemania/blob/master/public/screenshots/movie-detail-page.png?raw=true)

### 📺 Series Detail Page
![Series Detail Page](https://github.com/Prabesh001/moviemania/blob/master/public/screenshots/series-detail-page.png?raw=true)

### 🗺️ Explore Page
![Explore Page](https://github.com/Prabesh001/moviemania/blob/master/public/screenshots/movie-page.png?raw=true)

### 🙎 Person Detail Page
![Person Detail Page](https://github.com/Prabesh001/moviemania/blob/master/public/screenshots/person-detail-page.png?raw=true)

### 🔍 Search Page
![Search Page](https://github.com/Prabesh001/moviemania/blob/master/public/screenshots/search-result-page.png?raw=true)

---


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [Next.js](https://nextjs.org/) for the frontend framework  
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TMDb API](https://www.themoviedb.org/) for movie data  

---

## 👤 Author

**Prabesh**  
GitHub: [@Prabesh001](https://github.com/Prabesh001)

---

> Built for exploring movies and TV shows while learning to use custom hooks.
