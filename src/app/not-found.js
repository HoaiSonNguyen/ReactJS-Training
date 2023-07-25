import Link from "next/link";
export default function NotFound() {
    return (
        <>
            <div className="container">
                <div className="content-404">
                    <h1 className="content-404__title">404</h1>
                    <p className="content-404__text">Page not found</p>
                    <Link className="content-404__btn" href='/'>Back to home</Link>
                </div>
            </div>
        </>
    );
}