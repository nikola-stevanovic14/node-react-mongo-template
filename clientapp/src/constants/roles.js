export const ROLES = {
    ADMIN: {
        value: 'admin',
        label: 'Admin'
    },
    BASIC_USER: {
        value: 'basic_user',
        label: 'Basic user'
    }
}

export const rolesPrettyPrint = (userRoles) => {
    const rolesToPrint = [];
    userRoles.forEach(role => {
        if(role === ROLES.ADMIN.value) {
            rolesToPrint.push(ROLES.ADMIN.label);
        }
        else if(role === ROLES.BASIC_USER.value) {
            rolesToPrint.push(ROLES.BASIC_USER.label);
        }
    });

    return rolesToPrint.join(", ");
}