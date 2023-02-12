export interface User {
    id: string;
    name: string;
    provider_id: string;
    email: string;
    profile_pic: string;
    banned: boolean;
    active: boolean;
}
