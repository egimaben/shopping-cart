const getUsername=()=>{ 
    let user = window.localStorage.getItem('userProfile');
    return user!==null?JSON.parse(user):{}};
export default getUsername;