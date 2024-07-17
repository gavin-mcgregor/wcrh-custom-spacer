/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	// Atrributes
	const { height } = attributes;

	// Height options
	const heightOptions = [
		{ label: __("Please Select"), value: "", disabled: true },
		{ label: __("Half"), value: "spacer-xhalf" },
		{ label: __("Normal"), value: "spacer-x1" },
		{ label: __("Double"), value: "spacer-x2" },
		{ label: __("4x"), value: "spacer-x4" },
	];

	// Get label for span
	const selectedHeightLabel =
		heightOptions.find((option) => option.value === height)?.label || "";

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<Flex direction="column">
						<FlexItem>
							<SelectControl
								label={__("Spacer Height")}
								value={height || ""}
								options={heightOptions}
								onChange={(value) => setAttributes({ height: value })}
							/>
						</FlexItem>
					</Flex>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({ className: `${height}` })}>
				<span>{`${selectedHeightLabel} Spacer`}</span>
			</div>
		</>
	);
}
