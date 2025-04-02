const Skeleton = ({ className="w-60 h-60" }) => {
  return (
    <div
      className={`bg-gray-600 animate-pulse rounded-md ${className}`}
    />
  );
};
export default Skeleton;
