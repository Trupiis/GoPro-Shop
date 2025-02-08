import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"

const Loading = ({ count = 6 }) => {
    // Creamos una cantidad de skeletons basada en el número de productos esperados
    const skeletons = Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="flex flex-col place-content-center p-10 rounded-xl mx-auto bg-[#1313133a] w-72 h-auto"
      >
<Skeleton customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />       

<div className="pt-5 flex flex-col text-white">
    <Skeleton customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />    

    <Skeleton customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />    
        </div>
      </div>
    ));
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skeletons}
      </div>
    );
  };

export default Loading