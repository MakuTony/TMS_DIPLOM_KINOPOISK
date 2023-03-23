import {StylesConfig} from "react-select";
import {OptionProps} from "./SelectGenre";

export const GenreStyles: StylesConfig<OptionProps> = {
    control: (provided: any, state: any) => ({
        ...provided,
        marginTop: 8,
        width: 438,
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
            borderColor: "#eb8715",
        },
        ':hover': {
            borderColor: "#eb8715",
        },
        ':focus': {
            borderColor: "#eb8715",
        },
        borderColor: state.isFocused || state.isSelected ? 'rgb(246, 143, 70, 1)' : '#eb8715',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        borderBottom: '1px solid #eb8715',
        color: state.isFocused ? '#eb8715' : '#ffffff',
        height: 55,
        paddingRight: 16,
        paddingLeft: 20,
        display: "flex",
        fontFamily: 'Exo 2',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "space-between",
        background: state.isFocused ? "#eb8715" : "#eb8715",
        cursor: "pointer",
        ':hover': {
            backgroundColor: "#eb8715"
        },
        ':after': state.isFocused && {
            color: "#eb8715",
            content: "url(\"data:image/svg+xml;charset=UTF-8,<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' version='1.1'><path d='M7 12L10.5 15.5L18 8' stroke='rgba(123, 97, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\");",
            display: "flex",
            justifyContent: "space-between",
        },
        marginBottom: 0
    }),
    menu: () => ({
        borderRadius: 10,
        marginTop: 8,
        overflow: "hidden",
        background: "#eb8715",
        cursor: "pointer",
        width: "100%",
    }),
    menuList: () => ({
        padding: 0,
        margin: 0
    }),
    multiValue: (base: any, state: any) => {
        return {
            ...base,
            backgroundColor: '#eb8715',
            borderRadius: 6,
            fontFamily: 'Exo 2',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 16,
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: 5,
            paddingBottom: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
    },
    multiValueLabel: (base: any) => {
        return {
            ...base,
            color: 'white',
            fontFamily: 'Exo 2',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 16,
        }
    },
    multiValueRemove: (base: any) => {
        return {...base, display: 'flex', width: 24, height: 24, paddingTop: 3, ':hover': {
                backgroundColor: "#eb8715"
            },
        };
    },
    indicatorSeparator: () => ({
        display: "none"
    }),
    indicatorsContainer: () => ({
        display: "none"
    }),
    input: (styles) => ({...styles, color: 'white' }),
    singleValue: (provided: any, state: any) => {
        const opacity = state.isDisabled ? 0 : 1;
        const transition = 'opacity 300ms';
        const color = "#ffffff"
        const cursor = "pointer"
        return {...provided, opacity, transition, color, cursor};
    }
};

export const GenreStylesTablet: StylesConfig<OptionProps> = {
    ...GenreStyles, control: (provided: any, state: any) => ({
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
        color: "#000000",
        cursor: "pointer",
        boxShadow: "none",
        outline: "none",
        borderWidth: "2px",
        ':active': {
            borderColor: "rgb(246, 143, 70, 1)",
        },
        ':hover': {
            borderColor: "#eb8715",
        },
        ':focus': {
            borderColor: "rgb(246, 143, 70, 1)",
        },
        borderColor: state.isFocused || state.isSelected ? 'rgb(246, 143, 70, 1)' : '#eb8715',
    }),
};

export const GenreStylesLight: StylesConfig<OptionProps> = {
    control: (provided: any, state: any) => ({
        ...provided,
        marginTop: 8,
        width: "100%",
        background: "#ffffff",
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
            borderColor: "rgb(246, 143, 70, 1)",
        },
        ':hover': {
            borderColor: "#ffffff",
        },
        ':focus': {
            borderColor: "rgb(246, 143, 70, 1)",
        },
        borderColor: state.isFocused || state.isSelected ? 'rgb(246, 143, 70, 1)' : '#ffffff',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        borderBottom: '1px solid #eb8715',
        color: state.isFocused ? '#eb8715' : '#eb8715',
        height: 55,
        paddingRight: 16,
        paddingLeft: 20,
        display: "flex",
        fontFamily: 'Exo 2',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "space-between",
        background: state.isFocused ? "#000ffffff000" : "#ffffff",
        cursor: "pointer",
        ':hover': {
            backgroundColor: "#ffffff"
        },
        ':after': state.isFocused && {
            color: "#eb8715",
            content: "url(\"data:image/svg+xml;charset=UTF-8,<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' version='1.1'><path d='M7 12L10.5 15.5L18 8' stroke='rgba(123, 97, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\");",
            display: "flex",
            justifyContent: "space-between",
        },
        marginBottom: 0
    }),
    menu: () => ({
        borderRadius: 10,
        marginTop: 8,
        overflow: "hidden",
        background: "#ffffff",
        cursor: "pointer",
        width: "100%",
        transition: "0.3"
    }),
    menuList:  () => ({
        padding: 0,
        margin: 0
    }),
    multiValue: (base: any) => {
        return { ...base,
            backgroundColor: '#eb8715' ,
            borderRadius: 6,
            fontFamily: 'Exo 2',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 16,
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: 3,
            paddingBottom: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
    },
    multiValueLabel: (base: any) => {
        return {
            ...base,
            color: 'white',
            fontFamily: 'Exo 2',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 16,
        }
    },
    multiValueRemove: (base: any) => {
        return {...base, display: 'flex', width: 24, height: 24, paddingTop: 3, color: "#ffffff", ':hover': {
                backgroundColor: "#eb8715"},
        };
    },
    indicatorSeparator: () => ({
        display: "none"
    }),
    indicatorsContainer: () => ({
        display: "none"
    }),
    input: (styles) => ({...styles, color: 'white' }),
    singleValue: (provided: any, state: any) => {
        const opacity = state.isDisabled ? 0 : 1;
        const transition = 'opacity 300ms';
        const color = "#ffffff"
        const cursor = "pointer"
        return {...provided, opacity, transition, color, cursor};
    }
};