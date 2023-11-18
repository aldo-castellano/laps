import styles from "@/styles/reviews.module.css";
import toolStyles from "@/styles/general/tools.module.css";

export default function Reviews() {
  const cards = [
    {
      name: "Aldo",
      reviews: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        quibusdam minus. Quisquam consequuntur nemo repudiandae soluta iste
        culpa alias quod quos eius. Quibusdam pariatur voluptatibus,
        veritatis nesciunt quam laborum molestias.`,
    },
    {
      name: "Aldo",
      reviews: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          quibusdam minus. Quisquam consequuntur nemo repudiandae soluta iste
          culpa alias quod quos eius. Quibusdam pariatur voluptatibus,
          veritatis nesciunt quam laborum molestias.`,
    },
    {
      name: "Aldo",
      reviews: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          quibusdam minus. Quisquam consequuntur nemo repudiandae soluta iste
          culpa alias quod quos eius. Quibusdam pariatur voluptatibus,
          veritatis nesciunt quam laborum molestias.`,
    },
    {
      name: "Aldo",
      reviews: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          quibusdam minus. Quisquam consequuntur nemo repudiandae soluta iste
          culpa alias quod quos eius. Quibusdam pariatur voluptatibus,
          veritatis nesciunt quam laborum molestias.`,
    },
    {
      name: "Aldo",
      reviews: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          quibusdam minus. Quisquam consequuntur nemo repudiandae soluta iste
          culpa alias quod quos eius. Quibusdam pariatur voluptatibus,
          veritatis nesciunt quam laborum molestias.`,
    },
    {
      name: "Aldo",
      reviews: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          quibusdam minus. Quisquam consequuntur nemo repudiandae soluta iste
          culpa alias quod quos eius. Quibusdam pariatur voluptatibus,
          veritatis nesciunt quam laborum molestias.`,
    },
  ];
  return (
    <div className={toolStyles.container}>
      <h2>Reseñas</h2>
      <div className={styles.container_card}>
        {cards.map((card: { name: string; reviews: string }, index: number) => {
          return (
            <div key={index} className={styles.card}>
              <p className={styles.name}>{card.name}</p>
              <article className={styles.review}>{card.reviews}</article>
            </div>
          );
        })}
      </div>
    </div>
  );
}
