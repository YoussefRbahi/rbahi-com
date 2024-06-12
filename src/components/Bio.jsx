function Bio() {
  return (
    <div className="flex flex-col gap-3">
      <div className="hidden">
        <img src="" alt="" />
      </div>

      <h1 className="font-bold tracking-tight text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl  text-highcontrast">
        <a href="/">Youssef Rbahi</a>
      </h1>
      <h2 className="text-lg font-medium text-highcontrast">
        Junior Frontend Developer
      </h2>
      <p className="text-md text-justify">
        I blend my web development skills with marketing expertise to craft
        engaging and impactful digital experiences.
      </p>
    </div>
  );
}
export default Bio;
