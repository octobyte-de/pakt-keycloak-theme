import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "terms.ftl" });

const meta = {
    title: "login/terms.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: "<p><strong>Please accept our TOS & our data privacy policy to proceed with your account registration.</strong></p>"
                    }
                }
            }}
        />
    )
};

export const German: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "de"
                },
                "x-keycloakify": {
                    // cSpell: disable
                    messages: {
                        termsText:
                            "<p><strong>Bitte akzeptiere unsere AGB sowie unsere Datenschutzerklärung um deine Registrierung zu vervollständigen.</strong></p>",
                        termsTitle: "<p>AGB & Datenschutzerklärung</p>"
                    }
                    // cSpell: enable
                }
            }}
        />
    )
};

export const French: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                "x-keycloakify": {
                    // cSpell: disable
                    messages: {
                        termsText: "<p>Mes terme en <strong>Français</strong></p>"
                    }
                    // cSpell: enable
                }
            }}
        />
    )
};

export const Spanish: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "es"
                },
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>Mis términos en <strong>Español</strong></p>"
                    }
                }
            }}
        />
    )
};

