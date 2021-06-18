import { graphql } from "gatsby";
import * as React from "react";

import ProjectPageLayout from "../../components/layouts/project_page";
import Tags from "../../components/tags";
import {
    centeredTimers,
    converterContainer,
    dateConverterPicker,
    timeDisplay,
    timer,
    timerHeader,
} from "./index.module.scss";

// markup
const IndexPage = ({ data }: any) => {
    return (
        <ProjectPageLayout>
            <Tags
                title='Decimal Time'
                description='Get the current decimal time and convert between it and the less efficient representation'
                keywords={[
                    "programming",
                    "programmer",
                    "decimaltime",
                    "decimal",
                    "time",
                    "date",
                    "picker",
                ]}
            />
            <div className={centeredTimers}>
                <h2 className={timerHeader}>Live Decimal Time</h2>
                <h2 id='timeDisplay' className={timer}></h2>

                <h2 className={timerHeader}>Live Decimal Date</h2>
                <h2 id='dateDisplay' className={timer}></h2>

                <h2 className={timerHeader}>Convert Dates</h2>
                <div>
                    <div className={converterContainer}>
                        <p>Nonsense date</p>
                        <input
                            id='dateConverterPicker'
                            className={dateConverterPicker}
                            type='datetime-local'
                        />
                    </div>
                    <div className={converterContainer}>
                        <p>Decimal date</p>
                        <input id='dateConverterInput' />
                    </div>
                </div>
            </div>

            <div>
                <h2>About</h2>
                <p>
                    If you're like me, you've probably also struggled to learn
                    to tell the time at some point in your life. A bunch of
                    arbitrary divisions that make absolutely no sense. When does
                    the AM/PM go? When does it reset, on 12 or after? Why are
                    they divided into 12ths and 60ths? Madness!
                </p>
                <p>
                    Can we really make fun of the janks for their inches in a
                    stone in a footlong when we also use a system with weird
                    divisions? That is as much as 10 football fields worth of
                    conversions.
                </p>
                <p>We cannot. We need to adapt.</p>
                <p>
                    Decimal time solves all this and more! The day is
                    represented by a single number, going from 0 to 1. You can
                    be as precise as you wish, by simply adding or removing
                    decimals. It's also more compact, because no number has a
                    boundary at 12 or 60.
                </p>
                <p>
                    This website does not use time zones and will start the day
                    at midnight UTC. It's possible to use decimal time with time
                    zones, but that's a separate discussion.
                </p>
            </div>

            <script
                dangerouslySetInnerHTML={{
                    __html: data.file.internal.content,
                }}
            />
        </ProjectPageLayout>
    );
};

export const query = graphql`
    query JSQuery {
        file(base: { eq: "decimal._js_" }) {
            internal {
                content
            }
        }
    }
`;

export default IndexPage;
