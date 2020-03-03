/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { globalVariables, IIconSizes } from "@library/styles/globalStyleVars";
import { colorOut, IBorderRadiusValue, unit } from "@library/styles/styleHelpers";
import { styleFactory, useThemeCache, variableFactory } from "@library/styles/styleUtils";
import { layoutVariables } from "@library/layout/panelLayoutStyles";
import { formElementsVariables } from "@library/forms/formElementStyles";
import { percent } from "csx";
import { OverflowProperty, ResizeProperty, StandardLonghandPropertiesFallback } from "csstype";

export const inputBlockVariables = useThemeCache(() => {
    const vars = globalVariables();
    const varsLayouts = layoutVariables();
    const mixBgAndFg = vars.mixBgAndFg;
    const makeThemeVars = variableFactory("formElements");
});

export const inputBlockClasses = useThemeCache(() => {
    const style = styleFactory("inputBlock");
    const globalVars = globalVariables();
    const vars = inputBlockVariables();
    const formElementVars = formElementsVariables();

    const inputText = style("inputText", {
        display: "block",
    });

    const inputWrap = style("inputWrap", {
        display: "block",
    });

    const labelAndDescription = style("labelAndDescription", {
        display: "block",
        width: percent(100),
    });

    const root = style({
        display: "block",
        width: percent(100),
        $nest: {
            [`& + &`]: {
                marginTop: unit(formElementVars.spacing.margin),
            },
            [`&.isLast`]: {
                marginBottom: unit(formElementVars.spacing.margin),
            },
            [`&.hasError .${inputText}`]: {
                borderColor: colorOut(globalVars.messageColors.error.fg),
                backgroundColor: colorOut(globalVars.messageColors.error.fg),
                color: colorOut(globalVars.messageColors.error.fg),
            },
            "&.isHorizontal": {
                display: "flex",
                width: percent(100),
                alignItems: "center",
                flexWrap: "wrap",
            },
            [`&.isHorizontal .${labelAndDescription}`]: {
                display: "inline-flex",
                width: "auto",
            },
            [`&.isHorizontal .${inputWrap}`]: {
                display: "inline-flex",
                flexGrow: 1,
            },
        },
    });

    const errors = style("errors", {
        display: "block",
        fontSize: unit(globalVars.fonts.size.small),
    });
    const error = style("error", {
        display: "block",
        color: colorOut(globalVars.messageColors.error.fg),
        $nest: {
            "& + &": {
                marginTop: unit(6),
            },
        },
    });
    const labelNote = style("labelNote", {
        display: "block",
        fontSize: unit(globalVars.fonts.size.small),
        fontWeight: globalVars.fonts.weights.normal,
        opacity: 0.6,
    });

    const labelText = style("labelText", {
        display: "block",
        fontWeight: globalVars.fonts.weights.semiBold,
        fontSize: unit(globalVars.fonts.size.medium),
        marginBottom: unit(formElementVars.spacing.margin / 2),
    });

    const sectionTitle = style("sectionTitle", {
        fontWeight: globalVars.fonts.weights.semiBold,
        lineHeight: globalVars.lineHeights.base,
    });

    const fieldsetGroup = style("fieldsetGroup", {
        marginTop: unit(formElementVars.spacing.margin),
        $nest: {
            "&.noMargin": {
                marginTop: unit(0),
            },
        },
    });

    const multiLine = (resize?: ResizeProperty, overflow?: OverflowProperty) => {
        return style("multiLine", {
            resize: (resize ? resize : "vertical") as ResizeProperty,
            overflow: (overflow ? overflow : "auto") as OverflowProperty,
        });
    };

    return {
        root,
        inputText,
        errors,
        error,
        labelNote,
        labelText,
        inputWrap,
        labelAndDescription,
        sectionTitle,
        fieldsetGroup,
        multiLine,
    };
});
