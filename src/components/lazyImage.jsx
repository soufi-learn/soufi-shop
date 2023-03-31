import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className }) => {
    const [imageSrc, setImageSrc] = useState("");
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImageSrc(src);
                    observer.unobserve(imgRef.current);
                }
            },
            { rootMargin: "0px 0px 50px 0px" }
        );

        observer.observe(imgRef.current);

        return () => {
            observer.unobserve(imgRef.current);
        };
    }, [src]);

    return <img ref={imgRef} src={imageSrc} alt={alt} className={className} />;
};

export default LazyImage;