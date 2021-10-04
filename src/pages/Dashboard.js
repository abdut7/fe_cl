
import increacse2 from '../assets/resources/icons/top/increacse2.svg'
import checkCircleSolid from '../assets/resources/icons/btm/check-circle-solid.svg'
import checkCircleRegular from '../assets/resources/icons/btm/check-circle-regular.svg'

function Dashboard(){
    return(
        <div>
        <div className="content-top">
            <div className="content-card">
            <div className="content-card-top">
                <p className="content-card-head">
                Account<br/>
                Balance
                </p>
                <p className="content-card-data">
                Last year <span>14,34,567</span>
                </p>
            </div>
            <div className="content-card-btm content-card-top">
                <p className="content-card-amount">$26,750</p>
                <img src={increacse2} alt="" className="content-card-graph"/>
            </div>
            </div>

            <div className="content-card">
            <div className="content-card-top">
                <p className="content-card-head">
                Total<br/>
                Profit
                </p>
                <p className="content-card-data">
                Last year <span>14,34,567</span>
                </p>
            </div>
            <div className="content-card-btm content-card-top">
                <p className="content-card-amount">$750</p>
                <img src={increacse2} alt="" className="content-card-graph" />
            </div>
            </div>

            <div className="content-card">
                <div className="content-card-top">
                <p className="content-card-head">
                    Total<br/>
                    Returnes
                </p>
                <p className="content-card-data">
                    Last year <span>14,34,567</span>
                </p>
                </div>
                <div className="content-card-btm content-card-top">
                <p className="content-card-amount">$4,750</p>
                <img src={increacse2} alt="" className="content-card-graph" />
                </div>
            </div>
        </div>
        <div className="content-btm">
            <div className="graphholder">X</div>
            <div className="reference">
                <p className="reference-head">First Level Reference</p>
                <p className="reference-value">16,85,674</p>
                <p className="reference-head">Second Level Reference</p>
                <p className="reference-value">6,85,674</p>
                <p className="reference-head">Third Level Reference</p>
                <p className="reference-value">26,85,674</p>
            </div>
        </div>
        <div className="content-course-status">
            <div className="content-course-status-col1">
            <p className="reference-value content-course-status-head">
                Course Process
            </p>
            <div className="process-path">
                <img src={checkCircleSolid} alt="" className="nav-icon"/>
                <div className="processline"></div>

                <img src={{checkCircleSolid}} alt="" className="nav-icon"/>
                <div className="processline"></div>
                <img src={checkCircleRegular} alt="" className="nav-icon"/>
                <div className="processline"></div>
                <img src={checkCircleRegular} alt="" className="nav-icon"/>
            </div>
            </div>
            <div className="content-course-status-col2">
            <button className="period">Yearly</button>
            <button className="period">Quarterly</button>
            <button className="period">Monthly</button>
            </div>
        </div>
    </div>
    )
}

export default Dashboard;