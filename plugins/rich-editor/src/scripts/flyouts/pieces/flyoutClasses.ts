/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */
import { globalVariables } from "@library/styles/globalStyleVars";
import { shadowHelper } from "@library/styles/shadowHelpers";
import { borders, colorOut, longWordEllipsis, paddings, singleBorder, unit } from "@library/styles/styleHelpers";
import { styleFactory, useThemeCache } from "@library/styles/styleUtils";
import { calc, percent } from "csx";
import { richEditorVariables } from "@rich-editor/editor/richEditorVariables";

export const richEditorFlyoutClasses = useThemeCache(() => {
    const vars = richEditorVariables();
    const style = styleFactory("richEditorFlyout");
    const shadows = shadowHelper();
    const globalVars = globalVariables();

    const richEditorWidth = 8 * vars.sizing.emojiSize;

    const root = style({
        ...shadows.dropDown(),
        position: "absolute",
        left: 0,
        width: unit( richEditorWidth),
        zIndex: 6,
        overflow: "hidden",
        backgroundColor: colorOut(vars.colors.bg),
        ...borders(),

        $nest: {
            "& .ReactVirtualized__Grid": {
                minWidth: unit(richEditorWidth ),
            },
        },
    });

    const header = style("header", {
        position: "relative",
        borderBottom: singleBorder(),
        ...paddings(vars.emojiHeader.padding),
    });

    const title = style("title", {
        display: "flex",
        alignItems: "center",
        ...longWordEllipsis(),
        margin: 0,
        maxWidth: calc(`100% - ${unit(vars.menuButton.size)}`),
        minHeight: vars.menuButton.size - vars.emojiBody.padding.horizontal,
        fontSize: percent(100),
        lineHeight: "inherit",
        color: colorOut(globalVars.mainColors.fg),
        $nest: {
            "&:focus": {
                outline: 0,
            },
        },
    });

    const body = style("body", {
        ...paddings(vars.emojiBody.margin),
    });

    const footer = style("footer", {
        borderTop: singleBorder(),
    });

    return { root, header, body, footer, title };
});
