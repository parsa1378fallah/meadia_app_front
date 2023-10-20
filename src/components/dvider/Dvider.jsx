export default function sidebar({ classes , margin }) {
  const combinedClass = `w-full h-0.5  rounded-full ${classes}`;
  return (
    <div className={margin}>
      <div className={combinedClass}></div>
    </div>
  );
}

