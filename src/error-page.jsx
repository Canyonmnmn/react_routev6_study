/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-03-01 14:45:39
 * @LastEditors: jianguo
 * @LastEditTime: 2023-03-01 14:46:03
 */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}