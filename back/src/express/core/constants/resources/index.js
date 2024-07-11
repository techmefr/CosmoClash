/**
 * Access specific type road
 * @version 0.0.1
 * @author Patouillard Franck <patouillardfranck3@gmail.com>
 * @type {[{adminRoadTypeAccess: string[], userRoadTypeAccess: string[], url: string},{adminRoadTypeAccess: string[], userRoadTypeAccess: string[], url: string},{adminRoadTypeAccess: string[], userRoadTypeAccess: string[], url: string},{adminRoadTypeAccess: string[], userRoadTypeAccess: string[], url: string}]}
 */
const roadResources = [
    {
        url: "/actions",
        adminRoadTypeAccess: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
        userRoadTypeAccess: ['GET', 'PUT','PATCH']
    },

    {
        url: "/alliances",
        adminRoadTypeAccess: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
        userRoadTypeAccess: ['GET', 'POST', 'PUT','PATCH']
    },

    
    {
        url: "/planets",
        adminRoadTypeAccess: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
        userRoadTypeAccess: ['GET', 'PUT','PATCH']
    },
    {
        url: "/ships",
        adminRoadTypeAccess: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
        userRoadTypeAccess: ['GET', 'PUT','PATCH']
    },
    {
        url: "/resources",
        adminRoadTypeAccess: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
        userRoadTypeAccess: ['GET', 'PUT','PATCH']
    },
];

export default roadResources;