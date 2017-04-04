/* eslint-env browser */
import Promise from "promise";

let posts = {
    posts: [
        {
            id: 1,
            title: "Really good one",
            excerpt: "The soundtrack section plays short excerpts of the music, which should get a lot" +
                    " of credit for establishing the mood of the film."
        }, {
            id: 2,
            title: "Something special",
            excerpt: "the notes are excerpted from his forthcoming biography"
        }, {
            id: 3,
            title: "Worth it",
            excerpt: "a sturdy youth who excelled at footbal"
        }
    ]
}

export function getPosts() {
    return new Promise((resolve, reject) => {
        // resolve(posts);
        setTimeout(function () {
            resolve(posts);
        }, 1000);
        //reject("Error");
    });
}
