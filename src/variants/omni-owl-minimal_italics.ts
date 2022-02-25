import { ThemeSchema } from '~/@types/ThemeSchema'
import { alpha } from '~/util/alpha'

import { rgb, rgba } from '~/util/color'

const palette = {
  base: {
    BG: rgb('#13111B'),
    FG: rgb('#E1E1E6'),
    SELECTION: rgb('#41414D'),
    COMMENT: rgb('#746699'),
    CYAN: rgb('#988bc7'),
    GREEN: rgb('#67e480'),
    ORANGE: rgb('#E89E64'),
    PINK: rgb('#FF79C6'),
    PURPLE: rgb('#78D1E1'),
    RED: rgb('#E96379'),
    YELLOW: rgb('#e7de79'),
  },
  other: {
    TEMP_QUOTES: rgb('#e7de79'),
    TEMP_PROPERTY_QUOTES: rgb('#7159C1'),
    AlmostComment: rgb('#5A4B81'),
    LineNumber: rgb('#544776'),
    LineHighlight: rgba('#44475A', '75'),
    NonText: rgba('#FFFFFF', '1A'),
    WHITE: rgb('#E1E1E6'),
    TAB_DROP_BG: rgba('#44475A', '70'),
    // BGLighter: rgb('#252131'), // TODO: Make it brighter
    BGLighter: rgb('#3c3550'),
    BGLight: rgb('#201B2D'),
    BGDark: rgb('#15121E'),
  },
  ansi: {
    COLOR0: rgb('#201B2D'),
    COLOR1: rgb('#FF79C6'),
    COLOR2: rgb('#67e480'),
    COLOR3: rgb('#e7de79'),
    COLOR4: rgb('#78D1E1'),
    COLOR5: rgb('#988bc7'),
    COLOR6: rgb('#A1EFE4'),
    COLOR7: rgb('#E1E1E6'),
    COLOR8: rgb('#626483'),
    COLOR9: rgb('#ed4556'),
    COLOR10: rgb('#00F769'),
    COLOR11: rgb('#e7de79'),
    COLOR12: rgb('#78D1E1'),
    COLOR13: rgb('#988bc7'),
    COLOR14: rgb('#A4FFFF'),
    COLOR15: rgb('#F7F7FB'),
  },
}

export const omniOwlMinimalItalics: ThemeSchema = {
  name: 'Omni Owl (Minimal Italics)',
  type: 'dark',
  colors: {
    // Integrated Terminal Colors
    'terminal.background': palette.base.BG,
    'terminal.foreground': palette.base.FG,
    'terminal.ansiBrightBlack': palette.ansi.COLOR8,
    'terminal.ansiBrightRed': palette.ansi.COLOR9,
    'terminal.ansiBrightGreen': palette.ansi.COLOR10,
    'terminal.ansiBrightYellow': palette.ansi.COLOR11,
    'terminal.ansiBrightBlue': palette.ansi.COLOR12,
    'terminal.ansiBrightMagenta': palette.ansi.COLOR13,
    'terminal.ansiBrightCyan': palette.ansi.COLOR14,
    'terminal.ansiBrightWhite': palette.ansi.COLOR15,
    'terminal.ansiBlack': palette.ansi.COLOR0,
    'terminal.ansiRed': palette.ansi.COLOR1,
    'terminal.ansiGreen': palette.ansi.COLOR2,
    'terminal.ansiYellow': palette.ansi.COLOR3,
    'terminal.ansiBlue': palette.ansi.COLOR4,
    'terminal.ansiMagenta': palette.ansi.COLOR5,
    'terminal.ansiCyan': palette.ansi.COLOR6,
    'terminal.ansiWhite': palette.ansi.COLOR7,
    'terminal.selectionBackground': alpha(palette.other.AlmostComment, 45),
    'terminalCursor.background': palette.ansi.COLOR0,
    'terminalCursor.foreground': palette.base.FG,

    // Contrast Colors
    contrastBorder: palette.other.BGDark,
    // contrastActiveBorder: palette.other.BGDark,

    // Base Colors
    focusBorder: palette.other.AlmostComment,
    foreground: palette.base.FG,
    // 'widget.shadow': palette.base.FG,
    'selection.background': palette.base.PURPLE,
    errorForeground: palette.base.RED,

    // Button Control
    'button.background': palette.base.SELECTION,
    'button.foreground': palette.base.FG,

    // Dropdown Control
    'dropdown.background': palette.other.BGLight,
    'dropdown.border': palette.other.BGDark,
    'dropdown.foreground': palette.base.FG,

    // Input Control
    'input.background': palette.base.BG,
    'input.foreground': palette.base.FG,
    'input.border': palette.other.BGDark,
    'input.placeholderForeground': palette.other.AlmostComment,
    'inputOption.activeBorder': palette.base.PURPLE,
    // 'inputValidation.infoForeground': palette.base.PURPLE,
    // 'inputValidation.infoBackground': palette.base.PURPLE,
    'inputValidation.infoBorder': palette.base.PINK,
    // 'inputValidation.warningForeground': palette.base.PINK,
    // 'inputValidation.warningBackground': palette.base.PINK,
    'inputValidation.warningBorder': palette.base.ORANGE,
    // 'inputValidation.errorForeground': palette.base.ORANGE,
    // 'inputValidation.errorBackground': palette.base.ORANGE,
    'inputValidation.errorBorder': palette.base.RED,

    // Scroll Bar Control
    // 'scrollbar.shadow': palette.base.RED,
    // 'scrollbarSlider.activeBackground': palette.base.RED,
    // 'scrollbarSlider.background': palette.base.RED,
    // 'scrollbarSlider.hoverBackground': palette.base.RED,

    // Badge
    'badge.foreground': palette.base.FG,
    'badge.background': palette.base.SELECTION,

    // Progress Bar
    'progressBar.background': palette.base.PINK,

    // List & Trees
    'list.activeSelectionBackground': alpha(palette.base.SELECTION, 60),
    'list.activeSelectionForeground': palette.base.FG,
    'list.dropBackground': palette.base.SELECTION,
    'list.focusBackground': palette.other.LineHighlight,
    'list.highlightForeground': palette.base.CYAN,
    'list.hoverBackground': alpha(palette.base.SELECTION, 65),
    'list.inactiveSelectionBackground': alpha(palette.base.SELECTION, 40),
    // 'list.inactiveSelectionForeground': alpha(palette.base.SELECTION, 40),
    'list.warningForeground': palette.base.ORANGE,
    'list.errorForeground': palette.base.RED,
    // 'list.hoverForeground': palette.base.RED,
    // 'list.focusForeground': palette.base.RED,

    // Activity Bar
    'activityBar.background': palette.base.BG,
    'activityBar.inactiveForeground': palette.other.AlmostComment,
    // 'activityBar.dropBackground': palette.other.AlmostComment,
    'activityBar.foreground': palette.base.FG,
    'activityBar.border': null,
    'activityBar.activeBorder': alpha(palette.base.PINK, 80),
    'activityBar.activeBackground': alpha(palette.base.SELECTION, 40),
    'activityBarBadge.background': palette.base.PINK,
    'activityBarBadge.foreground': palette.other.BGDark,

    // Side Bar
    'sideBar.background': palette.base.BG,
    // 'sideBar.foreground': palette.base.BG,
    // 'sideBar.border': palette.other.BGLighter,
    'sideBarTitle.foreground': palette.base.FG,
    'sideBarSectionHeader.background': palette.base.BG,
    // 'sideBarSectionHeader.foreground': palette.base.BG,
    'sideBarSectionHeader.border': palette.other.BGLighter,

    // Text Link
    'textLink.foreground': palette.base.PINK,
    'textLink.activeForeground': alpha(palette.base.PINK, 200),

    // Editor Group & Tabs
    // 'editorGroup.background': palette.base.PINK,
    'editorGroup.border': palette.base.SELECTION,
    'editorGroup.dropBackground': palette.other.TAB_DROP_BG,
    // 'editorGroupHeader.noTabsBackground': palette.other.TAB_DROP_BG,
    'editorGroupHeader.tabsBackground': palette.other.BGDark,
    // 'editorGroupHeader.tabsBorder': palette.other.TAB_DROP_BG,
    'tab.activeBackground': alpha(palette.base.SELECTION, 40),
    'tab.activeForeground': palette.base.FG,
    'tab.border': palette.other.BGDark,
    'tab.activeBorderTop': alpha(palette.base.PINK, 80),
    // 'tab.activeBorder': alpha(palette.base.PINK, 80),
    // 'tab.unfocusedActiveBorder': alpha(palette.base.PINK, 80),
    'tab.inactiveBackground': palette.base.BG,
    'tab.inactiveForeground': alpha(palette.base.CYAN, 170),
    // 'tab.unfocusedActiveForeground': palette.other.AlmostComment,
    // 'tab.unfocusedInactiveForeground': palette.other.AlmostComment,

    // Editor Colors
    'editor.foreground': palette.base.FG,
    'editor.background': palette.base.BG,
    'editorLineNumber.foreground': palette.other.LineNumber,
    // 'editorCursor.foreground': palette.other.LineNumber,

    'editor.selectionBackground': palette.base.SELECTION,
    'editor.selectionHighlightBackground': palette.other.BGLighter,
    'editor.selectionHighlightBorder': alpha(palette.other.WHITE, 20),
    // 'editor.inactiveSelectionBackground': palette.other.BGLighter,
    'editor.foldBackground': palette.base.BG,

    // 'editor.wordHighlightBackground': alpha(palette.base.CYAN, 47),
    'editor.wordHighlightBackground': alpha(palette.base.CYAN, 50),
    'editor.wordHighlightBorder': alpha(palette.other.WHITE, 20),
    'editor.wordHighlightStrongBackground': alpha(palette.base.GREEN, 50),
    'editor.wordHighlightStrongBorder': alpha(palette.other.WHITE, 20),

    'editor.findMatchBackground': alpha(palette.base.ORANGE, 80),
    'editor.findMatchHighlightBackground': alpha(palette.other.WHITE, 40),
    'editor.findRangeHighlightBackground': palette.other.LineHighlight,

    'editor.hoverHighlightBackground': palette.other.BGDark,

    'editor.lineHighlightBackground': palette.other.BGLight,
    'editor.lineHighlightBorder': palette.base.BG,

    'editorLink.activeForeground': palette.base.CYAN,
    'editor.rangeHighlightBackground': alpha(palette.base.PURPLE, 16),

    'editor.snippetTabstopHighlightBackground': palette.base.BG,
    'editor.snippetTabstopHighlightBorder': palette.other.AlmostComment,
    'editor.snippetFinalTabstopHighlightBackground': palette.base.BG,
    'editor.snippetFinalTabstopHighlightBorder': palette.base.GREEN,

    'editorWhitespace.foreground': palette.other.NonText,
    'editorIndentGuide.background': palette.other.NonText,
    'editorIndentGuide.activeBackground': alpha(palette.other.WHITE, 45),
    'editorRuler.foreground': palette.other.NonText,

    'editorCodeLens.foreground': palette.other.AlmostComment,

    // NOTE: These are not set because they tend to be highly contested from
    // person to person. Thus, setting these is probably better suited
    // for workbench.colorCustomizations in User Settings
    // 'editorBracketMatch.background': palette.other.AlmostComment,
    // 'editorBracketMatch.border': palette.other.AlmostComment,

    'editorOverviewRuler.border': palette.other.BGDark,
    // 'editorOverviewRuler.findMatchForeground': palette.other.BGDark,
    // 'editorOverviewRuler.rangeHighlightForeground': palette.other.BGDark,
    'editorOverviewRuler.selectionHighlightForeground': palette.base.ORANGE,
    'editorOverviewRuler.wordHighlightForeground': palette.base.CYAN,
    'editorOverviewRuler.wordHighlightStrongForeground': palette.base.GREEN,
    'editorOverviewRuler.modifiedForeground': alpha(palette.base.CYAN, 80),
    'editorOverviewRuler.addedForeground': alpha(palette.base.GREEN, 80),
    'editorOverviewRuler.deletedForeground': alpha(palette.base.RED, 80),
    'editorOverviewRuler.errorForeground': alpha(palette.base.RED, 80),
    'editorOverviewRuler.warningForeground': alpha(palette.base.ORANGE, 80),
    'editorOverviewRuler.infoForeground': alpha(palette.base.CYAN, 80),

    'editorError.foreground': palette.base.RED,
    // 'editorError.border': palette.base.RED,
    'editorWarning.foreground': palette.base.CYAN,
    // 'editorWarning.border': palette.base.CYAN,

    // 'editorGutter.background': palette.base.CYAN,
    'editorGutter.modifiedBackground': alpha(palette.base.CYAN, 80),
    'editorGutter.addedBackground': alpha(palette.base.GREEN, 80),
    'editorGutter.deletedBackground': alpha(palette.base.RED, 80),

    // Explorer Colors
    'gitDecoration.modifiedResourceForeground': palette.base.CYAN,
    'gitDecoration.deletedResourceForeground': palette.base.RED,
    'gitDecoration.untrackedResourceForeground': palette.base.GREEN,
    'gitDecoration.ignoredResourceForeground': alpha(palette.base.CYAN, 128),
    'gitDecoration.conflictingResourceForeground': palette.base.ORANGE,

    // Diff Editor Colors
    'diffEditor.insertedTextBackground': alpha(palette.base.GREEN, 16),
    // 'diffEditor.insertedTextBorder': alpha(palette.base.GREEN, 16),
    'diffEditor.removedTextBackground': alpha(palette.base.RED, 50),
    // 'diffEditor.removedTextBorder': alpha(palette.base.RED, 50),

    // Editor Widget Colors
    'editorWidget.background': palette.base.BG,
    // editorWidgetBorder: palette.base.BG,

    'editorSuggestWidget.background': palette.base.BG,
    // 'editorSuggestWidget.border': palette.base.BG,
    'editorSuggestWidget.foreground': palette.base.FG,
    // 'editorSuggestWidget.highlightForeground': palette.base.FG,
    'editorSuggestWidget.selectedBackground': palette.base.SELECTION,

    'editorHoverWidget.background': palette.base.BG,
    'editorHoverWidget.border': palette.other.AlmostComment,

    // 'debugExceptionWidget.background': palette.other.AlmostComment,
    // 'debugExceptionWidget.border': palette.other.AlmostComment,

    'editorMarkerNavigation.background': palette.base.BG,
    // 'editorMarkerNavigationError.background': palette.base.BG,
    // 'editorMarkerNavigationWarning.background': palette.base.BG,

    // Peek View Colors
    'peekView.border': palette.base.SELECTION,
    'peekViewEditor.background': palette.base.BG,
    // 'peekViewEditorGutter.background': palette.base.BG,
    'peekViewEditor.matchHighlightBackground': alpha(palette.base.YELLOW, 80),
    'peekViewResult.background': palette.base.BG,
    'peekViewResult.fileForeground': palette.base.FG,
    'peekViewResult.lineForeground': palette.base.FG,
    'peekViewResult.matchHighlightBackground': alpha(palette.base.YELLOW, 80),
    'peekViewResult.selectionBackground': palette.base.SELECTION,
    'peekViewResult.selectionForeground': palette.base.FG,
    'peekViewTitle.background': palette.other.BGDark,
    'peekViewTitleDescription.foreground': palette.other.AlmostComment,
    'peekViewTitleLabel.foreground': palette.base.FG,

    // Merge Conflicts
    'merge.currentHeaderBackground': alpha(palette.base.GREEN, 90),
    // 'merge.currentContentBackground': alpha(palette.base.GREEN, 90),
    'merge.incomingHeaderBackground': alpha(palette.base.PURPLE, 90),
    // 'merge.incomingContentBackground': alpha(palette.base.PURPLE, 90),
    // 'merge.border': alpha(palette.base.PURPLE, 90),
    'editorOverviewRuler.currentContentForeground': palette.base.GREEN,
    'editorOverviewRuler.incomingContentForeground': palette.base.PURPLE,

    // Panel Colors
    'panel.background': palette.base.BG,
    'panel.border': palette.other.BGLighter,
    'panelTitle.activeBorder': palette.base.RED,
    'panelTitle.activeForeground': palette.base.FG,
    'panelTitle.inactiveForeground': alpha(palette.base.FG, 80),

    // Status Bar Colors
    'statusBar.background': palette.other.BGDark,
    'statusBar.foreground': palette.base.FG,
    'statusBar.debuggingBackground': palette.base.PINK,
    'statusBar.debuggingForeground': palette.other.BGDark,
    'statusBar.noFolderBackground': palette.other.BGDark,
    'statusBar.noFolderForeground': palette.base.FG,
    // 'statusBarItem.activeBackground': palette.base.FG,
    // 'statusBarItem.hoverBackground': palette.base.FG,
    'statusBarItem.prominentBackground': palette.base.PINK,
    'statusBarItem.prominentForeground': palette.other.BGDark,
    'statusBarItem.prominentHoverBackground': palette.base.ORANGE,
    'statusBarItem.remoteBackground': palette.base.PINK,
    'statusBarItem.remoteForeground': palette.other.BGDark,
    // 'statusBar.border': palette.base.PINK,

    // Merge Conflicts
    'titleBar.activeBackground': palette.base.BG,
    'titleBar.activeForeground': palette.base.FG,
    'titleBar.inactiveBackground': palette.other.BGDark,
    'titleBar.inactiveForeground': palette.other.AlmostComment,

    // Notification Dialog Colors
    // 'notifications.background': palette.base.BG,
    // 'notifications.foreground': palette.base.FG,
    // 'notifications.buttonBackground': palette.base.SELECTION,
    // 'notifications.buttonForeground': palette.base.FG,
    // 'notifications.buttonHoverBackground': palette.other.LineHighlight,
    // 'notifications.errorBackground': palette.base.RED,
    // 'notifications.errorForeground': palette.base.FG,
    // 'notifications.infoBackground': palette.base.CYAN,
    // 'notifications.infoForeground': palette.base.BG,
    // 'notifications.warningBackground': palette.base.ORANGE,
    // 'notifications.warningForeground': palette.base.BG,

    // Extensions
    'extensionButton.prominentForeground': palette.base.FG,
    'extensionButton.prominentBackground': alpha(palette.base.GREEN, 90),
    'extensionButton.prominentHoverBackground': alpha(palette.base.GREEN, 60),

    // Quick Picker
    'pickerGroup.border': palette.base.PURPLE,
    'pickerGroup.foreground': palette.base.CYAN,

    // Debug
    'debugToolBar.background': palette.base.BG,

    // Welcome Page
    // 'welcomePage.buttonBackground': palette.base.BG,
    // 'welcomePage.buttonHoverBackground': palette.base.BG,
    'walkThrough.embeddedEditorBackground': palette.base.BG,

    // Setting Editor
    'settings.headerForeground': palette.base.FG,
    // 'settings.modifiedItemForeground': palette.base.ORANGE,
    'settings.modifiedItemIndicator': palette.base.ORANGE,
    // 'settings.inactiveSelectedItemBorder': palette.base.ORANGE,
    'settings.dropdownBackground': palette.base.BG,
    'settings.dropdownForeground': palette.base.FG,
    'settings.dropdownBorder': palette.other.BGDark,
    'settings.checkboxBackground': palette.base.BG,
    'settings.checkboxForeground': palette.base.FG,
    'settings.checkboxBorder': palette.other.BGDark,
    'settings.textInputBackground': palette.base.BG,
    'settings.textInputForeground': palette.base.FG,
    'settings.textInputBorder': palette.other.BGDark,
    'settings.numberInputBackground': palette.base.BG,
    'settings.numberInputForeground': palette.base.FG,
    'settings.numberInputBorder': palette.other.BGDark,

    // Breadcrumbs
    'breadcrumb.foreground': palette.base.CYAN,
    'breadcrumb.background': palette.base.BG,
    'breadcrumb.focusForeground': palette.base.FG,
    'breadcrumb.activeSelectionForeground': palette.base.FG,
    'breadcrumbPicker.background': palette.other.BGDark,

    // Misc
    // 'menu.separatorBackground': palette.other.BGDark,

    'listFilterWidget.background': palette.other.BGLight,
    'listFilterWidget.outline': palette.other.BGLighter,
    'listFilterWidget.noMatchesOutline': palette.base.RED,
  },
  tokenColors: [
    // General
    {
      scope: ['strong'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: ['header'],
      settings: {
        foreground: palette.base.PURPLE,
      },
    },
    {
      scope: ['source'],
      settings: {
        foreground: palette.base.FG,
      },
    },
    {
      scope: ['meta.diff', 'meta.diff.header'],
      settings: {
        foreground: palette.other.AlmostComment,
      },
    },
    {
      scope: ['markup.inserted'],
      settings: {
        foreground: palette.base.GREEN,
      },
    },
    {
      scope: ['markup.deleted'],
      settings: {
        foreground: palette.base.RED,
      },
    },
    {
      scope: ['markup.changed'],
      settings: {
        foreground: palette.base.ORANGE,
      },
    },
    {
      scope: ['invalid'],
      settings: {
        foreground: palette.base.RED,
        fontStyle: 'underline',
      },
    },
    {
      scope: ['invalid.deprecated'],
      settings: {
        foreground: palette.base.FG,
        fontStyle: 'underline',
      },
    },
    {
      scope: ['entity.name.filename'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      scope: ['markup.error'],
      settings: {
        foreground: palette.base.RED,
      },
    },

    // Markdown / RST / Prose
    {
      name: 'Underlined markup',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Bold markup',
      scope: ['markup.bold'],
      settings: {
        fontStyle: 'bold',
        foreground: palette.base.ORANGE,
      },
    },
    {
      name: 'Markup headings',
      scope: ['markup.heading'],
      settings: {
        fontStyle: 'bold',
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Markup italic',
      scope: ['markup.italic'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'Bullets, lists (prose)',
      scope: [
        'beginning.punctuation.definition.list.markdown',
        'beginning.punctuation.definition.quote.markdown',
        'punctuation.definition.link.restructuredtext',
      ],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'Inline code (prose)',
      scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
      settings: {
        foreground: palette.base.GREEN,
      },
    },
    {
      name: 'Links (prose)',
      scope: ['markup.underline.link', 'markup.underline.link.image'],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'Link text, image alt text (prose)',
      scope: [
        'meta.link.reference.def.restructuredtext',
        'punctuation.definition.directive.restructuredtext',
        'string.other.link.description',
        'string.other.link.title',
      ],
      settings: {
        foreground: palette.base.PINK,
      },
    },
    {
      name: 'Blockquotes (prose)',
      scope: ['entity.name.directive.restructuredtext', 'markup.quote'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'Horizontal rule (prose)',
      scope: ['meta.separator.markdown'],
      settings: {
        foreground: palette.other.AlmostComment,
      },
    },
    {
      name: 'Code blocks',
      scope: [
        'fenced_code.block.language',
        'markup.raw.inner.restructuredtext',
        'markup.fenced_code.block.markdown punctuation.definition.markdown',
      ],
      settings: {
        foreground: palette.base.GREEN,
      },
    },
    {
      name: 'Prose constants',
      scope: ['punctuation.definition.constant.restructuredtext'],
      settings: {
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Braces in markdown headings',
      scope: [
        'markup.heading.markdown punctuation.definition.string.begin',
        'markup.heading.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Braces in markdown paragraphs',
      scope: [
        'meta.paragraph.markdown punctuation.definition.string.begin',
        'meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: palette.base.FG,
      },
    },
    {
      name: 'Braces in markdown blockquotes',
      scope: [
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },

    // Classes
    {
      name: 'User-defined class names',
      scope: ['entity.name.type.class', 'entity.name.class'],
      settings: {
        foreground: palette.base.CYAN,
        fontStyle: 'normal',
      },
    },
    {
      name: 'this, super, self, etc.',
      scope: [
        'keyword.expressions-and-types.swift',
        'keyword.other.this',
        'variable.language',
        'variable.language punctuation.definition.variable.php',
        'variable.other.readwrite.instance.ruby',
        'variable.parameter.function.language.special',
      ],
      settings: {
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Inherited classes',
      scope: ['entity.other.inherited-class'],
      settings: {
        foreground: palette.base.CYAN,
      },
    },

    // Comments
    {
      name: 'Comments',
      scope: [
        'comment',
        'punctuation.definition.comment',
        'unused.comment',
        'wildcard.comment',
      ],
      settings: {
        foreground: palette.base.COMMENT,
      },
    },
    {
      name: 'JSDoc-style keywords',
      scope: [
        'comment keyword.codetag.notation',
        'comment.block.documentation keyword',
        'comment.block.documentation storage.type.class',
      ],
      settings: {
        foreground: palette.base.PINK,
      },
    },
    {
      name: 'JSDoc-style types',
      scope: ['comment.block.documentation entity.name.type'],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'JSDoc-style type brackets',
      scope: [
        'comment.block.documentation entity.name.type punctuation.definition.bracket',
      ],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'JSDoc-style comment parameters',
      scope: ['comment.block.documentation variable'],
      settings: {
        foreground: palette.base.ORANGE,
      },
    },

    // Constants
    {
      name: 'Constants',
      scope: ['constant', 'variable.other.constant'],
      settings: {
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Constant escape sequences',
      scope: [
        'constant.character.escape',
        'constant.character.string.escape',
        'constant.regexp',
      ],
      settings: {
        foreground: palette.base.PINK,
      },
    },

    // Entities
    {
      name: 'HTML tags',
      scope: ['entity.name.tag'],
      settings: {
        foreground: palette.base.PINK,
      },
    },
    {
      name: "CSS attribute parent selectors ('&')",
      scope: ['entity.other.attribute-name.parent-selector'],
      settings: {
        foreground: palette.base.PINK,
      },
    },
    {
      name: 'CSS ID',
      scope: ['entity.other.attribute-name.id'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'HTML/CSS attribute names',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: palette.base.GREEN,
      },
    },
    {
      name: 'Tag inline source',
      scope: ['meta.tag.inline source'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },

    // Function/Methods
    {
      name: 'Function names',
      scope: [
        'entity.name.function',
        'meta.function-call.generic',
        'meta.function-call.object',
        'meta.function-call.php',
        'meta.function-call.static',
        'meta.method-call.java meta.method',
        'meta.method.groovy',
        'support.function.any-method.lua',
        'keyword.operator.function.infix',
      ],
      settings: {
        foreground: palette.base.GREEN,
      },
    },
    {
      name: 'Function parameters',
      scope: [
        'entity.name.variable.parameter',
        'meta.at-rule.function variable',
        'meta.at-rule.mixin variable',
        'meta.function.arguments variable.other.php',
        'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
        'variable.parameter',
      ],
      settings: {
        foreground: palette.base.ORANGE,
      },
    },
    {
      name: 'Decorators',
      scope: [
        'meta.decorator variable.other.readwrite',
        'meta.decorator variable.other.property',
      ],
      settings: {
        foreground: palette.base.GREEN,
      },
    },
    {
      name: 'Decorator Objects',
      scope: ['meta.decorator variable.other.object'],
      settings: {
        foreground: palette.base.GREEN,
      },
    },

    // Keywords
    {
      name: 'Keywords',
      scope: ['keyword', 'punctuation.definition.keyword'],
      settings: {
        foreground: palette.base.PINK,
      },
    },
    {
      name: 'Keyword "new"',
      scope: ['keyword.control.new', 'keyword.operator.new'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Generic selectors (CSS/SCSS/Less/Stylus)',
      scope: ['meta.selector'],
      settings: {
        foreground: palette.base.PINK,
      },
    },

    // Language Built-ins
    {
      name: 'Language Built-ins',
      scope: ['support'],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'Built-in magic functions and constants',
      scope: [
        'support.function.magic',
        'support.variable',
        'variable.other.predefined',
      ],
      settings: {
        fontStyle: 'regular',
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Built-in functions / properties',
      scope: ['support.function', 'support.type.property-name'],
      settings: {
        fontStyle: 'regular',
      },
    },

    // Punctuation
    {
      name: 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
      scope: [
        'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
        'entity.other.attribute-name.placeholder punctuation',
        'entity.other.attribute-name.pseudo-class punctuation',
        'entity.other.attribute-name.pseudo-element punctuation',
        'meta.group.double.toml',
        'meta.group.toml',
        'meta.object-binding-pattern-variable punctuation.destructuring',
        'punctuation.colon.graphql',
        'punctuation.definition.block.scalar.folded.yaml',
        'punctuation.definition.block.scalar.literal.yaml',
        'punctuation.definition.block.sequence.item.yaml',
        'punctuation.definition.entity.other.inherited-class',
        'punctuation.function.swift',
        'punctuation.separator.dictionary.key-value',
        'punctuation.separator.hash',
        'punctuation.separator.inheritance',
        'punctuation.separator.key-value',
        'punctuation.separator.key-value.mapping.yaml',
        'punctuation.separator.namespace',
        'punctuation.separator.pointer-access',
        'punctuation.separator.slice',
        'string.unquoted.heredoc punctuation.definition.string',
        'support.other.chomping-indicator.yaml',
        'punctuation.separator.annotation',
      ],
      settings: {
        foreground: palette.base.PINK,
      },
    },
    {
      name: 'Brackets, braces, parens, etc.',
      scope: [
        'keyword.operator.other.powershell',
        'keyword.other.statement-separator.powershell',
        'meta.brace.round',
        'meta.function-call punctuation',
        'punctuation.definition.arguments.begin',
        'punctuation.definition.arguments.end',
        'punctuation.definition.entity.begin',
        'punctuation.definition.entity.end',
        'punctuation.definition.tag.cs',
        'punctuation.definition.type.begin',
        'punctuation.definition.type.end',
        'punctuation.section.scope.begin',
        'punctuation.section.scope.end',
        'storage.type.generic.java',
        'string.template meta.brace',
        'string.template punctuation.accessor',
      ],
      settings: {
        foreground: palette.base.FG,
      },
    },
    {
      name: 'Variable interpolation operators',
      scope: [
        'meta.string-contents.quoted.double punctuation.definition.variable',
        'punctuation.definition.interpolation.begin',
        'punctuation.definition.interpolation.end',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded.begin',
        'punctuation.section.embedded.coffee',
        'punctuation.section.embedded.end',
        'punctuation.section.embedded.end source.php',
        'punctuation.section.embedded.end source.ruby',
        'punctuation.definition.variable.makefile',
      ],
      settings: {
        foreground: palette.base.PINK,
      },
    },

    // Serializable / Config Languages
    {
      name: 'Keys (serializable languages)',
      scope: [
        'entity.name.function.target.makefile',
        'entity.name.section.toml',
        'entity.name.tag.yaml',
        'variable.other.key.toml',
      ],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'Dates / timestamps (serializable languages)',
      scope: ['constant.other.date', 'constant.other.timestamp'],
      settings: {
        foreground: palette.base.ORANGE,
      },
    },
    {
      name: 'YAML aliases',
      scope: ['variable.other.alias.yaml'],
      settings: {
        fontStyle: 'underline',
        foreground: palette.base.GREEN,
      },
    },

    // Storage
    {
      name: 'Storage',
      scope: [
        'storage',
        'meta.implementation storage.type.objc',
        'meta.interface-or-protocol storage.type.objc',
        'source.groovy storage.type.def',
      ],
      settings: {
        fontStyle: 'regular',
        foreground: palette.base.PINK,
      },
    },
    {
      name: 'Types',
      scope: [
        'entity.name.type',
        'keyword.primitive-datatypes.swift',
        'keyword.type.cs',
        'meta.protocol-list.objc',
        'meta.return-type.objc',
        'source.go storage.type',
        'source.groovy storage.type',
        'source.java storage.type',
        'source.powershell entity.other.attribute-name',
        'storage.class.std.rust',
        'storage.type.attribute.swift',
        'storage.type.c',
        'storage.type.core.rust',
        'storage.type.cs',
        'storage.type.groovy',
        'storage.type.objc',
        'storage.type.php',
        'storage.type.haskell',
        'storage.type.ocaml',
      ],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'Generics, templates, and mapped type declarations',
      scope: [
        'entity.name.type.type-parameter',
        'meta.indexer.mappedtype.declaration entity.name.type',
        'meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: palette.base.ORANGE,
      },
    },
    {
      name: 'Modifiers',
      scope: ['storage.modifier'],
      settings: {
        foreground: palette.base.PINK,
      },
    },

    // RegExp
    {
      name: 'RegExp string',
      scope: [
        'string.regexp',
        'constant.other.character-class.set.regexp',
        'constant.character.escape.backslash.regexp',
      ],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'Non-capture operators',
      scope: ['punctuation.definition.group.capture.regexp'],
      settings: {
        foreground: palette.base.PINK,
      },
    },
    {
      name: 'RegExp start and end characters',
      scope: [
        'string.regexp punctuation.definition.string.begin',
        'string.regexp punctuation.definition.string.end',
      ],
      settings: {
        foreground: palette.base.RED,
      },
    },
    {
      name: 'Character group',
      scope: ['punctuation.definition.character-class.regexp'],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'Capture groups',
      scope: ['punctuation.definition.group.regexp'],
      settings: {
        foreground: palette.base.ORANGE,
      },
    },
    {
      name: 'Assertion operators',
      scope: [
        'punctuation.definition.group.assertion.regexp',
        'keyword.operator.negation.regexp',
      ],
      settings: {
        foreground: palette.base.RED,
      },
    },
    {
      name: 'Positive lookaheads',
      scope: ['meta.assertion.look-ahead.regexp'],
      settings: {
        foreground: palette.base.GREEN,
      },
    },

    // Strings
    {
      name: 'Strings',
      scope: ['string'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'String quotes (temporary vscode fix)',
      scope: [
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
      ],
      settings: {
        foreground: palette.other.TEMP_QUOTES,
      },
    },
    {
      name: 'Property quotes (temporary vscode fix)',
      scope: [
        'punctuation.support.type.property-name.begin',
        'punctuation.support.type.property-name.end',
      ],
      settings: {
        foreground: palette.other.TEMP_PROPERTY_QUOTES,
      },
    },
    {
      name: 'Docstrings',
      scope: [
        'string.quoted.docstring.multi',
        'string.quoted.docstring.multi.python punctuation.definition.string.begin',
        'string.quoted.docstring.multi.python punctuation.definition.string.end',
        'string.quoted.docstring.multi.python constant.character.escape',
      ],
      settings: {
        foreground: palette.other.AlmostComment,
      },
    },

    // Variables
    {
      name: 'Variables and object properties',
      scope: [
        'variable',
        'constant.other.key.perl',
        'support.variable.property',
        'variable.other.constant.js',
        'variable.other.constant.ts',
        'variable.other.constant.tsx',
      ],
      settings: {
        foreground: palette.base.FG,
      },
    },
    {
      name: 'Destructuring / aliasing reference name (LHS)',
      scope: [
        'meta.import variable.other.readwrite',
        'meta.object-binding-pattern-variable variable.object.property',
        'meta.variable.assignment.destructured.object.coffee variable',
      ],
      settings: {
        foreground: palette.base.ORANGE,
      },
    },
    {
      name: 'Destructuring / aliasing variable name (RHS)',
      scope: [
        'meta.import variable.other.readwrite.alias',
        'meta.export variable.other.readwrite.alias',
        'meta.variable.assignment.destructured.object.coffee variable variable',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: palette.base.FG,
      },
    },

    // Language Extensions / Edge Cases
    {
      name: 'GraphQL keys',
      scope: ['meta.selectionset.graphql variable'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'GraphQL function arguments',
      scope: ['meta.selectionset.graphql meta.arguments variable'],
      settings: {
        foreground: palette.base.FG,
      },
    },
    {
      name: 'GraphQL fragment name (definition)',
      scope: ['entity.name.fragment.graphql', 'variable.fragment.graphql'],
      settings: {
        foreground: palette.base.CYAN,
      },
    },
    {
      name: 'Edge cases (foreground color resets)',
      scope: [
        'constant.other.symbol.hashkey.ruby',
        'keyword.operator.dereference.java',
        'keyword.operator.navigation.groovy',
        'meta.scope.for-loop.shell punctuation.definition.string.begin',
        'meta.scope.for-loop.shell punctuation.definition.string.end',
        'meta.scope.for-loop.shell string',
        'storage.modifier.import',
        'punctuation.section.embedded.begin.tsx',
        'punctuation.section.embedded.end.tsx',
        'punctuation.section.embedded.begin.jsx',
        'punctuation.section.embedded.end.jsx',
        'punctuation.separator.list.comma.css',
        'constant.language.empty-list.haskell',
      ],
      settings: {
        foreground: palette.base.FG,
      },
    },
    {
      name: 'Shell variables prefixed with "$" (edge case)',
      scope: ['source.shell variable.other'],
      settings: {
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Powershell constants mistakenly scoped to `support`, rather than `constant` (edge)',
      scope: ['support.constant'],
      settings: {
        fontStyle: 'normal',
        foreground: palette.base.PURPLE,
      },
    },
    {
      name: 'Makefile prerequisite names',
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'SCSS attibute selector strings',
      scope: ['meta.attribute-selector.scss'],
      settings: {
        foreground: palette.base.YELLOW,
      },
    },
    {
      name: 'SCSS attribute selector brackets',
      scope: [
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss',
      ],
      settings: {
        foreground: palette.base.FG,
      },
    },
    {
      name: 'Haskell Pragmas',
      scope: ['meta.preprocessor.haskell'],
      settings: {
        foreground: palette.other.AlmostComment,
      },
    },
  ],
}
