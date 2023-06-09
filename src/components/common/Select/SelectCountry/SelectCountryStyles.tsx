export const customStyles = {
    option: (provided: {}, state: any) => ({
        ...provided,
        borderBottom: '1px solid #242426',
        color: state.isFocused ? '#eb8715' : '#FFFFFF',
        padding: 16,
        background: state.isFocused ? "#eb8715" : "#eb8715",
        cursor: "pointer",
        ':hover': {
            backgroundColor: "#eb8715"
        },
        fontFamily: 'Exo 2',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,
    }),
    menu: () => ({
        borderRadius: 10,
        marginTop: 8,
        overflow: "hidden",
        background: "#eb8715",
        width: "100%",
    }),
    menuList: () => ({
        padding: 0,
        margin: 0
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        marginTop: 8,
        width: "100%",
        background: "#eb8715",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        paddingLeft: 10,
        display: "flex",
        fontFamily: 'Exo 2',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,
        color: "#FFFFFF",
        cursor: "pointer",
        boxShadow: "none",
        outline: "none",
        borderWidth: "2px",
        ':active': {
            borderColor: "rgb(246, 143, 70)",
        },
        ':hover': {
            borderColor: "#eb8715",
        },
        ':focus': {
            borderColor: "rgb(246, 143, 70)",
        },
        borderColor: state.isFocused || state.isSelected ? 'rgb(246, 143, 70)' : '#eb8715',
    }),
    indicatorSeparator: () => ({
        display: "none"
    }),
    indicatorsContainer: () => ({
        paddingRight: 8,
    }),

    singleValue: (provided: any, state: any) => {
        const opacity = state.isDisabled ? 0 : 1;
        const transition = 'opacity 300ms';
        const color = "#FFFFFF"
        return {...provided, opacity, transition, color};
    }
};

export const customStylesLight = {
    option: (provided: any, state: any) => ({
        ...provided,
        borderBottom: '1px solid #eb8715',
        color: state.isFocused ? '#eb8715' : '#eb8715',
        padding: 16,
        background: state.isFocused ? "#FFFFFF" : "#FFFFFF",
        cursor: "pointer",
        ':hover': {
            backgroundColor: "#fafafa"
        },
        fontFamily: 'Exo 2',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,

    }),
    menu: () => ({
        borderRadius: 10,
        marginTop: 8,
        overflow: "hidden",
        background: "#FFFFFF",
        width: "100%",
    }),
    menuList: () => ({
        padding: 0,
        margin: 0
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        width: "100%",
        background: "#FFFFFF",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        paddingLeft: 10,
        display: "flex",
        fontFamily: 'Exo 2',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,
        color: "#eb8715",
        cursor: "pointer",
        boxShadow: "none",
        outline: "none",
        borderWidth: "2px",
        ':active': {
            borderColor: "rgb(246, 143, 70)",
        },
        ':hover': {
            borderColor: "#FFFFFF",
        },
        ':focus': {
            borderColor: "rgb(246, 143, 70)",
        },
        borderColor: state.isFocused || state.isSelected ? 'rgb(246, 143, 70, 1)' : '#FFFFFF',
    }),
    indicatorSeparator: () => ({
        display: "none"
    }),
    indicatorsContainer: () => ({
        paddingRight: 8,
    }),
    singleValue: (provided: any, state: any) => {
        const opacity = state.isDisabled ? 0 : 1;
        const transition = 'opacity 300ms';
        const color = "#eb8715"
        return {...provided, opacity, transition, color};
    }
};