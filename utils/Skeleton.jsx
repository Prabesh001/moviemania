const Skeleton = ({ width = "w-60", height = "h-40" }) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse rounded-md ${width} ${height}`}
    />
  );
};
export default Skeleton;
