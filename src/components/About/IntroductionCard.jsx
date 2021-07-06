import { DashboardCard } from "../DashboardCard";

export const IntroductionCard = () => (
    <DashboardCard title={"Introduction"} subtitle={"The reason of developing this site"} loading={false}>
        <div style={{ textAlign: "left", margin: 20, fontSize: 18, lineHeight: 1.75 }}>
            <p>
                🏆 Welcome to the <b><i>hackathon-winning</i></b> project demonstration site for HKSTP DTT Programme, presented by Group DS-04 🏆
            </p>
            <p>
                Credit to my teammates: Anson, Ben and Hugo for the model building.
            </p>
            <p>
                As the footer have stated, this website is a project website for the <a target="_blank" rel="noopener noreferrer" href="https://innoacademy.hkstp.org/dtt.html" style={{ color: "inherit" }}>1<sup>st</sup> Hong Kong Science Park DeepTech Talents Training Programme</a>.
                It was a 6-day bootcamp, joined by 100 talents around Hong Kong.
                As an evaluation after the 6-day lessons, the programme introduced a mini project on predicting the vacancy of carparks in Hong Kong.
                I and my teammates had successfully developed a machine learning model by on Tree-based model in Python.
                And I would like to take this opportunity to create a website for this project.
            </p>
            <p>
                Website design and development by myself 🧙‍♂️<br />
            </p>
            <p>
                Color scheme: Overall: A dark theme inspired by Monokai. Charts: Spectral<br />
            </p>
            <p>
                Warning: This website is not intended to be fully responsive! Graphs will be exploded in mobile view. The website is best fitted at 1920*1080.
            </p>
        </div>
    </DashboardCard>
)