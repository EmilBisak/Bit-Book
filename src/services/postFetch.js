import { fetchService } from "./fetchService";
import { POSTS, TEXTPOSTS, VIDEOPOSTS, IMAGEPOST, TEXTPOSTSGET, VIDEOPOSTSGET, IMAGEPOSTSGET, POSTDELETE } from "../shared/constants";

import { TextPost, VideoPost, ImagePost } from '../entities/Post';

export const getAllPosts = () => {
    return fetchService.get(POSTS)
        .then((response) => {
            return response.filter(post => {
                if (post.videoUrl) {
                    return post.videoUrl.includes('embed')
                }
                return response;
            })
        })
        .then((response) => {
            return response.slice(0,20).map((post) => {
                const { videoUrl, imageUrl, text, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                if (type === "text") {
                    return new TextPost(text, id, dateCreated, userId, userDisplayName, type, commentsNum);
                }
                if (type === "image") {
                    return new ImagePost(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum);
                }
                if (type === "video") {
                    return new VideoPost(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum);
                }
            })
        })
}

export const getVideoPost = (id) => {
    return fetchService.get(VIDEOPOSTSGET + id)

        .then((response) => {
            const { videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = response;
            return new VideoPost(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum);
        })
}

export const getImagePost = (id) => {
    return fetchService.get(IMAGEPOSTSGET + id)

        .then((response) => {
            const { imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = response;
            return new ImagePost(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum);
        })
}

export const getTextPost = (id) => {
    return fetchService.get(TEXTPOSTSGET + id)
        .then((response) => {
            const { text, id, dateCreated, userId, userDisplayName, type, commentsNum } = response;
            return new TextPost(text, id, dateCreated, userId, userDisplayName, type, commentsNum);
        })
}
export const postText = content => {
    return fetchService.post(TEXTPOSTS, content)
    
}

export const postVideo = content => {
    return fetchService.post(VIDEOPOSTS, content)
}

export const postImage = content => {
    return fetchService.post(IMAGEPOST, content)
}

export const deletePost = id => {
    return fetchService.delete(POSTDELETE, id)
}




