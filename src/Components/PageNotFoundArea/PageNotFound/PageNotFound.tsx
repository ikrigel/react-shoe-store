import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound Box">
            <div> <p><h1>Error 404</h1></p>
                <div>
                    <p>
                        <iframe
                            width="790"
                            height="444"
                            src="https://www.youtube.com/embed/t3otBjVZzT0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer;autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen

                        ></iframe>
                    </p>
                </div>
                <p><h3>Page Not Found</h3></p>

            </div>
        </div>
    );
}

export default PageNotFound;
