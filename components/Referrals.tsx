import ReferralsIcons from "@/public/assets/icons/ReferralsIcons";
import SpiralIcon from "@/public/assets/icons/SpiralIcon";

const Referrals = () => {
  return (
    <div className="relative bg-[#0F1017] py-[4.125rem] pl-[2.875rem] pr-[3.375rem] overflow-x-hidden">
      <div>
        <div>
          <ReferralsIcons />
        </div>

        <h3 className="my-5 text-[2rem] font-bold">Dividends</h3>

        <div className="space-y-7">
          <div>
            <p>Referral rewards </p>
            <p>0 TON</p>
          </div>
          <div>
            <p>Withdrawable(referral rewards included)</p>
            <p>0.000000 TON</p>
          </div>
          <div>
            <p>You should have 3-10 TON for the transaction fee</p>
          </div>
          <div>
            <p>My total investment 0 TON</p>
            <p>Total dividends so far 0.00 TON</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div>
          <ReferralsIcons />
        </div>
        <h3 className="my-5 text-[2rem] font-bold">Referral Program</h3>

        <div className="space-y-7">
          <div className="space-y-2">
            <p>Your referral link [COPY LINK]: no link yet...</p>
            <p>You can get your referral link after investing.</p>
          </div>

          {/* <div> */}
            <ul className="space-y-2">
              <li>1 referral (1% Referral rewards) - 0</li>
              <li>2 referral (2% Referral rewards) - 0</li>
              <li>3 referral (3% Referral rewards) - 0</li>
              <li>4 referral (4% Referral rewards) - 0</li>
              <li>5 referral (5% Referral rewards) - 0</li>
              <li>Invite (5% of the investment)</li>
            </ul>
          {/* </div> */}

          <div>Total referral rewards payout - 0 TON</div>
        </div>
      </div>
      <div className="absolute -top-32 right-0"><SpiralIcon/></div>
      <div className="absolute top-[550px] -right-16"><SpiralIcon/></div>
    </div>
  );
};

export default Referrals;
