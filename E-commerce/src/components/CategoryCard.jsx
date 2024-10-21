import { Link } from "react-router-dom";
function Card({ categories = [], className }) {
  return (
    <>
      <div className={`categorylist flex justify-center gap-8 flex-wrap  ${className}`}>
        {categories &&
          categories.map((cat, index) => (
            <Link to={`${cat.category}`} key={index}>
              <div className="category flex flex-col items-center justify-center p-2  ">
                <img src={cat.categoryImg} alt={cat.category} className="max-w-16" />
                <p className="">{cat.category}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default Card;
