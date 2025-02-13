import { ProjectsResponse, DeVouchAttestationsResponse } from "./types";

const GIVETH_PROD_URL = "https://mainnet.serve.giveth.io/graphql";
const DEVOUCH_PROD_URL = "https://optimism.backend.devouch.xyz/graphql";

export const createGivethGraphService = () => {
    const getProjects = async (
        limit: number = 10
    ): Promise<ProjectsResponse> => {
        try {
            const query = `{
                allProjects(sortingBy: InstantBoosting, limit: ${limit}, skip: 0) {
                    projects {
                        title
                        slug
                        description
                        addresses {
                            address
                            networkId
                        }
                    }
                }
            }`;

            const response = await fetch(GIVETH_PROD_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData?.errors?.[0]?.message ||
                        errorData?.message ||
                        `HTTP error! status: ${response.status}`
                );
            }

            const data = await response.json();

            // Validate that the response has the expected structure
            if (!data?.data?.allProjects?.projects) {
                throw new Error("Invalid response structure from Giveth API");
            }

            return data;
        } catch (error) {
            if (error instanceof Error) {
                console.error("Giveth API Error:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
            throw error;
        }
    };

    const getDeVouchAttestations = async (
        limit: number = 50,
        offset: number = 0,
        organisation_id: string = "0xf63f2a7159ee674aa6fce42196a8bb0605eafcf20c19e91a7eafba8d39fa0404"
    ): Promise<DeVouchAttestationsResponse> => {
        try {
            const query = `
                query fetchLatestAttests($offset: Int!, $limit: Int, $organisation_id: String!) {
                    projectAttestations(
                        offset: $offset,
                        limit: $limit,
                        orderBy: attestTimestamp_DESC,
                        where: {
                            vouch_eq: true,
                            project: {
                                source_eq: "giveth"
                            },
                            attestorOrganisation: {
                                organisation: {
                                    id_eq: $organisation_id
                                }
                            }
                        }
                    ) {
                        id
                        vouch
                        attestTimestamp
                        comment
                        project {
                            projectId
                            totalVouches
                            title
                            source
                            url
                        }
                        attestorOrganisation {
                            attestor {
                                id
                            }
                            organisation {
                                id
                                name
                                color
                            }
                        }
                    }
                }`;

            const variables = {
                limit,
                offset,
                organisation_id,
            };

            const response = await fetch(DEVOUCH_PROD_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query, variables }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData?.errors?.[0]?.message ||
                        errorData?.message ||
                        `HTTP error! status: ${response.status}`
                );
            }

            const data = await response.json();

            // Validate that the response has the expected structure
            if (!data?.data?.projectAttestations) {
                throw new Error("Invalid response structure from DeVouch API");
            }

            return data;
        } catch (error) {
            if (error instanceof Error) {
                console.error("DeVouch API Error:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
            throw error;
        }
    };

    return { getProjects, getDeVouchAttestations };
};
