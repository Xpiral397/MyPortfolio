import Ract from "react";
import { BentoGrid, BentoGridItem } from "./ui/gird-ui";
import { gridItems } from "./data";

export const Grid = () => {
  return (
    <section className="max-w-7xl">
      <BentoGrid>
        {gridItems.map((item, index) => {
          return (
            <BentoGridItem
              id={item.id}
              titleClassName={item.titleClassName}
              key={item.id}
              img={item.img}
              imgClass={item.imgClassName}
              spareImg={item.spareImg}
              title={item.title}
              className={item.className}
              description={item.description}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};
