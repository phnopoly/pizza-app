import { Grid } from "@chakra-ui/react"
import React from "react"
import { responsiveGridColumns, responsiveGridEdges } from "../utils"
import SEO from "./SEO"

interface BodyProps {
	/**
	 * Top-level page heading/name
	 */
	pageHeading: string | undefined

	/**
	 * Page title for SEO. Also displays as tab name
	 */
	pageTitle: string | undefined

	/**
	 * Page description/sub-heading
	 */
	pageDescription?: string | undefined

	/**
	 * Message subject for heading and breadcrumbs label messageSubject
	 */
	messageSubject?: string

	/**
	 * Allows buttons to appear on the right side of Title
	 */
	allowButton?: boolean

	children: React.ReactNode
}

export type LayoutProps = {
	children: React.ReactNode
} & BodyProps

export const Layout: React.FC<LayoutProps> = (p: LayoutProps) => {
	const { children, pageTitle } = p

	return (
		<Grid
			alignContent="start"
			fontFamily="body"
			fontSize="base"
			gridGap={responsiveGridEdges}
			gridTemplateColumns={responsiveGridColumns}
			lineHeight="normal"
			minH="100vh"
			p="24px"
			w={{ base: "full", md: "full", lg: "900px" }}
		>
			<SEO title={pageTitle} />
			{children}
		</Grid>
	)
}
