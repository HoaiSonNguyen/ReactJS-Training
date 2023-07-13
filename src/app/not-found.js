import Link from "next/link";
export default function NotFound() {
    return (
        <>
            <div class="container">
                <div class="content-404">
                    <h1 class="content-404__title">404</h1>
                    <p class="content-404__text">Page not found</p>
                    <Link class="content-404__btn" href='/'>Back to home</Link>
                </div>
            </div>
        </>
    );
}