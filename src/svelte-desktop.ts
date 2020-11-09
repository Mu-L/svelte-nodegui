declare namespace svelteDesktop.JSX {
    /* svelte specific */
    interface ElementClass {
        $$prop_def: any;
    }

    interface ElementAttributesProperty {
        $$prop_def: any; // specify the property name to use
    }

    /* I'm not sure of the type for Svelte Element, but extending ElementClass just makes the `$$prop_def` attribute become mandatory. */
    // type SvelteElement = ElementClass;
    type SvelteElement = {};
    type SvelteText = string | number;
    type SvelteChild = SvelteElement | SvelteText;

    interface SvelteNodeArray extends Array<SvelteNode> {}
    type SvelteFragment = {} | SvelteNodeArray;

    type SvelteNode = SvelteChild | SvelteFragment | boolean | null | undefined; 

    interface SvelteNodeGUIAttributes<
        T extends import("@nodegui/nodegui").Component = import("@nodegui/nodegui").Component
    > extends SvelteElement {
        nodeRole?: string;
        children?: SvelteNode;
    }
    
    type SvelteNodeGUIProps<
        Props extends {} = {},
        T extends import("@nodegui/nodegui").Component = import("@nodegui/nodegui").Component
    > = SvelteNodeGUIAttributes<T> & Props;

    // Add empty IntrinsicAttributes to prevent fallback to the one in the JSX namespace
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicAttributes {
    }

    interface IntrinsicElements {
        [name: string]: { [name: string]: any };
        image: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Image/RNImage").ImageProps,
            import("./dom/react-nodegui/src/components/Image/RNImage").RNImage
        >;
        animatedImage: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/AnimatedImage/RNAnimatedImage").AnimatedImageProps,
            import("./dom/react-nodegui/src/components/AnimatedImage/RNAnimatedImage").RNAnimatedImage
        >;
        view: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/View/RNView").ViewProps<any>,
            import("./dom/react-nodegui/src/components/View/RNView").RNView
        >;
        checkBox: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/CheckBox/RNCheckBox").CheckBoxProps,
            import("./dom/react-nodegui/src/components/CheckBox/RNCheckBox").RNCheckBox
        >;
        text: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Text/RNText").TextProps,
            import("./dom/react-nodegui/src/components/Text/RNText").RNText
        >;
        dial: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Dial/RNDial").DialProps,
            import("./dom/react-nodegui/src/components/Dial/RNDial").RNDial
        >;
        lineEdit: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/LineEdit/RNLineEdit").LineEditProps,
            import("./dom/react-nodegui/src/components/LineEdit/RNLineEdit").RNLineEdit
        >;
        window: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Window/RNWindow").WindowProps,
            import("./dom/react-nodegui/src/components/Window/RNWindow").RNWindow
        >;
        progressBar: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/ProgressBar/RNProgressBar").ProgressBarProps,
            import("./dom/react-nodegui/src/components/ProgressBar/RNProgressBar").RNProgressBar
        >;
        comboBox: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/ComboBox/RNComboBox").ComboBoxProps,
            import("./dom/react-nodegui/src/components/ComboBox/RNComboBox").RNComboBox
        >;
        button: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Button/RNButton").ButtonProps,
            import("./dom/react-nodegui/src/components/Button/RNButton").RNButton
        >;
        spinBox: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/SpinBox/RNSpinBox").SpinBoxProps,
            import("./dom/react-nodegui/src/components/SpinBox/RNSpinBox").RNSpinBox
        >;
        radioButton: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/RadioButton/RNRadioButton").RadioButtonProps,
            import("./dom/react-nodegui/src/components/RadioButton/RNRadioButton").RNRadioButton
        >;
        tab: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Tab/RNTab").TabProps,
            import("./dom/react-nodegui/src/components/Tab/RNTab").RNTab
        >;
        menu: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Menu/RNMenu").MenuProps,
            import("./dom/react-nodegui/src/components/Menu/RNMenu").RNMenu
        >;
        menuBar: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/MenuBar/RNMenuBar").MenuBarProps,
            import("./dom/react-nodegui/src/components/MenuBar/RNMenuBar").RNMenuBar
        >;
        plainTextEdit: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/PlainTextEdit/RNPlainTextEdit").PlainTextEditProps,
            import("./dom/react-nodegui/src/components/PlainTextEdit/RNPlainTextEdit").RNPlainTextEdit
        >;
        slider: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Slider/RNSlider").SliderProps,
            import("./dom/react-nodegui/src/components/Slider/RNSlider").RNSlider
        >;
        systemTrayIcon: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/SystemTrayIcon/RNSystemTrayIcon").SystemTrayIconProps,
            import("./dom/react-nodegui/src/components/SystemTrayIcon/RNSystemTrayIcon").RNSystemTrayIcon
        >;
        action: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/Action/RNAction").ActionProps,
            import("./dom/react-nodegui/src/components/Action/RNAction").RNAction
        >;
        boxView: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/BoxView/RNBoxView").BoxViewProps,
            import("./dom/react-nodegui/src/components/BoxView/RNBoxView").RNBoxView
        >;
        gridView: SvelteNodeGUIProps<
            import("./dom/react-nodegui/src/components/GridView/RNGridView").GridViewProps,
            import("./dom/react-nodegui/src/components/GridView/RNGridView").RNGridView
        >;
    }
}
