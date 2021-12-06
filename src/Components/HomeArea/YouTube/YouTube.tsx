import css from "./YouTube.module.css";

function YouTube(): JSX.Element {
  return (
    <div className={css.position +css.BackColor+" Box"}>
      <div className={css.LargeText}>
        Billie
        <p>
          <iframe 
            width="790"
            height="444"
            src="https://www.youtube.com/embed/EvdzQdnZPcw"
            title ="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </p>
      </div>
    </div>
  );
}

export default YouTube;
