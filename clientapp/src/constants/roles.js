export const ROLES = {
    ADMIN: {
        value: 'admin',
        label: 'Admin'
    },
    BASIC_USER: {
        value: 'basic_user',
        label: 'Basic User'
    },
    ADVANCED_USER: {
        value: 'advanced_user',
        label: 'Advanced User'
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
        else if(role === ROLES.ADVANCED_USER.value) {
            rolesToPrint.push(ROLES.ADVANCED_USER.label);
        }
    });

    return rolesToPrint.join(", ");
}

export const getAllRoles = () => {
    return [
        {
            value: ROLES.ADMIN.value,
            label: ROLES.ADMIN.label,
        },
        {
            value: ROLES.BASIC_USER.value,
            label: ROLES.BASIC_USER.label,
        },
        {
            value: ROLES.ADVANCED_USER.value,
            label: ROLES.ADVANCED_USER.label,
        }
    ]
}