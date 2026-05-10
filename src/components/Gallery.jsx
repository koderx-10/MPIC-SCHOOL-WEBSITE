import React from 'react';
import { motion } from 'framer-motion';

import campusImg from '../assets/GalleryImg/school_campus.jpg';
import studentsImg from '../assets/GalleryImg/student.jpg';
import libraryImg from '../assets/GalleryImg/library.jpg';
import sportsImg from '../assets/GalleryImg/sport.jpg';
import classroomImg from '../assets/GalleryImg/classroom.jpg';
import scienceLabImg from '../assets/GalleryImg/science_lab.jpg';
import artsImg from '../assets/GalleryImg/art.jpg';
import transportImg from '../assets/GalleryImg/computer_lab.jpg';

const Gallery = () => {

  const images = [
    { src: campusImg, label: 'Campus' },
    { src: studentsImg, label: 'Students' },
    { src: libraryImg, label: 'Library' },
    { src: sportsImg, label: 'Sports' },
    { src: classroomImg, label: 'Classroom' },
    { src: scienceLabImg, label: 'Science Lab' },
    { src: artsImg, label: 'Arts' },
    { src: transportImg, label: 'Transport' },
  ];

  return (
    <section className="py-14 md:py-20 bg-blue-900 text-white" id="gallery">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3"
          >
            Life at MPIC
          </motion.h2>

          <p className="text-blue-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Glimpses of our vibrant campus life, events, and student achievements.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {images.map((img, idx) => {

            const spanClass =
              idx === 0
                ? 'col-span-1 md:col-span-2 md:row-span-2'
                : idx === 5
                ? 'col-span-1 md:col-span-2 md:row-span-2'
                : 'col-span-1';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${spanClass}`}
                style={{ minHeight: '130px' }}
              >

                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover aspect-square md:aspect-auto md:absolute md:inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ height: '100%', minHeight: '130px' }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">

                  <span className="text-white text-xs font-semibold">
                    {img.label}
                  </span>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Gallery;