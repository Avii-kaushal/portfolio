const WorkImage = ({ image, alt }) => {
  return (
    <div className="relative flex justify-center">
      <img
        src={image}
        alt={alt}
        className="max-h-[200px] md:max-h-[250px] xl:max-h-[350px] w-auto object-contain"
      />
    </div>
  );
};

export default WorkImage;