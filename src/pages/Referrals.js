import { useEffect, useState } from "react";
import { post } from "../helper/util";


function Referrals(props){
    console.log(props);
    let [users, setUsers] = useState([])
    let [referrals, setReferrals] = useState([])
    let load = async ()=>{
        let response = await post('referral/get_referral');
        setUsers(response.data.arrList)
    }

    let loadReferrals = async(event)=>{
        let response = await post('referral/get_referral',{id:event.target.dataset.id});
        console.log(referrals);
        setReferrals(response.data.arrList)
    }

    useEffect(()=>{
        load();
    },[])

    return(
        <div className="news">
        <div style={{textAlign:'right'}}>
         <button className="period">New Referral</button>
        </div>
          <div className="referral">
            <div className="referral-top">
              <p className="referral-item-head">Name</p>
              <p className="referral-item-head">MobileNumber</p>
              <p className="referral-item-head">Reward Amount</p>
              <p className="referral-item-head">Referral Code</p>
              <p className="referral-item-head">Status</p>
              <p className="referral-item-head">Created Time</p>
              <p className="referral-item-head">Action</p>
            </div>
            {users.map((user,index)=>{
                return(
                    <div className="referral-sub" key={index}>
                        <p className="referral-item">{user.strUser}</p>
                        <p className="referral-item">{user.strMobile}</p>
                        <p className="referral-item">{user.intRewardAmount}</p>
                        <p className="referral-item">{user.strReferralCode}</p>
                        <p className="referral-item">{user.strReferralStatus}</p>
                        <p className="referral-item">{user.createdTime}</p>
                        <p className="referral-item" style={{textAlign:'right'}}>
                            <button className="period" onClick={loadReferrals} data-id={user.id}>Referrals</button>
                        </p>
                  </div>
                )
            })}
           
          </div>
          <div className="modal">
            <div className="modal-overlay modal-toggle"></div>
            <div className="modal-wrapper modal-transition">
            <div className="modal-header">
                <button className="modal-close modal-toggle">X</button>
                <h2 className="modal-heading">This is a modal</h2>
            </div>
            
            <div className="modal-body">
                <div className="modal-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum delectus, libero, accusantium dolores inventore obcaecati placeat cum sapiente vel laboriosam similique totam id ducimus aperiam, ratione fuga blanditiis maiores.</p>
                <button className="modal-toggle">Update</button>
                </div>
            </div>
            </div>
        </div>

        {/* <vs-modal ref="refferalModal" title="Refferal" align-top>
            <table style="width:100%" border="1">
                <tr className="" v-for="user in refUsers" style="border: 1px solid;">
                <td style="border: 1px solid;padding: 6px;">{user.strUser}</td>
                <td style="border: 1px solid;padding: 6px;">{user.strMobile}</td>
                <td style="border: 1px solid;padding: 6px;">{user.intRewardAmount}</td>
                <td style="border: 1px solid;padding: 6px;">{user.strReferralCode}</td>
                <td style="border: 1px solid;padding: 6px;">{user.createdTime}</td>
            </tr>
            </table>
        </vs-modal> */}

        {/*  <vs-modal ref="newRefferalModal" title="Refferal" align-top>
                <div className="">
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" className="form-control" v-model="form.mobile">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div slot="footer">
                    <button className="btn btn-secondary" type="button" data-coreui-dismiss="modal">Close</button>
                    <button className="btn btn-primary" type="button">Save</button>
                </div>
        </vs-modal> */}
    </div>
    )
}

export default Referrals;