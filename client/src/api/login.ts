import axios from 'axios';
import { serverBaseUrl } from '@/lib/data';
import { BlockType } from '@/components/ui/editorBlocks';

export async function login(){
    return axios({
        url: serverBaseUrl + '/auth/login',
        method: 'get'
    })
}

export async function getUserData(token: string){
    return axios({
        url: serverBaseUrl + '/user/info',
        method: 'get',
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`,
            
        }
    })
}

export type StoryResponse = {
    data: {
        content: string,
        storyID: string,
    }
}
export async function getStoryData(id: string | null, token: string): Promise<StoryResponse>{
    if(id){
        return axios({
            url: serverBaseUrl + `/story/?storyID=${id}`,
            method: 'get',
            withCredentials: false,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }else{
        return axios(
            {
                url: serverBaseUrl + '/story/new',
                method: 'get',
                withCredentials: false,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

}

export async function updateStoryData(token: string, id: string, data: Array<BlockType>){
    return axios({
        url: serverBaseUrl + "/story/update",
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            storyID: id,
            content: JSON.stringify(data),
        }
    })
}

export type StoryTitle = {
    key: string;
    title: string;
    isPublished: boolean;
    author: string;
}
export type StoryTitleResponse = {
    data: Array<StoryTitle>
}
export async function getMineStories(token: string): Promise<StoryTitleResponse>{
    return axios(
        {
            url: serverBaseUrl + '/story/all/mine',
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
}

export function updateStoryStatus(data: {token: string, storyID: string, isPublished: boolean}){
    return axios(
        {
            url: serverBaseUrl + `/story/update/status?storyID=${data.storyID}&isPublished=${data.isPublished}`,
            method: 'get',
            headers: {
                Authorization: `Bearer ${data.token}`
            }

        }
    )
}

export function deleteStory(data: {token: string, storyID: string}){
    return axios(
        {
            url: serverBaseUrl + `/story/delete?storyID=${data.storyID}`,
            method: 'delete',
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        }
    )
}