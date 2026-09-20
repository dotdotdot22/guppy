{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Guppy Website\
// script.js\
\
document.addEventListener("DOMContentLoaded", () => \{\
\
    // Theme gallery\
    const thumbs = document.querySelectorAll(".theme-thumb");\
    const preview = document.getElementById("theme-preview");\
\
    thumbs.forEach(thumb => \{\
        thumb.addEventListener("click", () => \{\
            if (!preview) return;\
\
            preview.src = thumb.dataset.image;\
\
            thumbs.forEach(t => t.classList.remove("active"));\
            thumb.classList.add("active");\
        \});\
    \});\
\
    // Smooth scrolling for navigation links\
    document.querySelectorAll('a[href^="#"]').forEach(link => \{\
        link.addEventListener("click", e => \{\
            e.preventDefault();\
\
            const target = document.querySelector(link.getAttribute("href"));\
\
            if (target) \{\
                target.scrollIntoView(\{\
                    behavior: "smooth",\
                    block: "start"\
                \});\
            \}\
        \});\
    \});\
\
\});}