import React from 'react';

const MovieSlider = () => {
    // Array of movie images
    const movies = [
        '/images/movie_1.webp',
        '/images/movie_2.webp',
        '/images/movie_1.webp',
        '/images/movie_2.webp',
        '/images/movie_1.webp',
        '/images/movie_2.webp',
        '/images/movie_1.webp',
        '/images/movie_2.webp',
        '/images/movie_1.webp',
        '/images/movie_2.webp',
    ];

    return (
        <section className="bg-black py-0 overflow-hidden relative group">
            <div className="flex whitespace-nowrap overflow-hidden">
                {/* Scrolling Container - No gaps, no padding, images are joined */}
                <div className="flex animate-scroll hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
                    {[...movies, ...movies, ...movies].map((src, index) => (
                        <div
                            key={`movie-${index}`}
                            className="flex-shrink-0 relative overflow-hidden"
                        >
                            <img
                                src={src}
                                alt={`Movie poster ${index + 1}`}
                                className="h-48 md:h-64 lg:h-[400px] w-auto object-cover transform transition-transform duration-700 hover:scale-110"
                                loading="lazy"
                            />
                            {/* Subtle overlay for each poster */}
                            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top and Bottom Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent opacity-50"></div>

            {/* Gradient Mask for Edges (optional, but makes it look more premium) */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default MovieSlider;
