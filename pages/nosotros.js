import Image from "next/image";
import Layout from "@/components/layout";
import style from "@/styles/nosotros.module.css";

const Nosotros = () => {
	return (
		<>
			<Layout
				title={"Nosotros"}
				description="Sobre nosotros, guitarLa, tienda de música "
			>
				<main className="contenedor">
					<h1 className="heading">Nosotros</h1>

					<div className={style.contenido}>
						<Image
							src="/img/nosotros.jpg"
							width={1000}
							height={800}
							alt="Imagen sobre nosotros"
						/>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
								doloribus praesentium consectetur perspiciatis blanditiis et
								ipsum quasi tenetur dolorem, repellendus velit, vero illo quos
								possimus sit labore nihil dicta doloremque?
							</p>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repellendus asperiores, aliquid ea soluta earum est optio
								excepturi officia impedit error dolores voluptatum quam. Harum
								nulla ratione, illum veritatis quas consequatur.
							</p>
						</div>
					</div>
				</main>
			</Layout>
		</>
	);
};

export default Nosotros;
