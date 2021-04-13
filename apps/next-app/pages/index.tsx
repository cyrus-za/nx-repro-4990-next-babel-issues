import { Dropdown } from '@org/ui'
import Image from 'next/image'

const IMAGE_URL =
  'https://lh3.googleusercontent.com/a-/AOh14Gh13EfhiuXcWcpNulog09wbQTY9QvlImgdonPs0CTAVIzvKE3B-XfG53buo2GN9gt1QIti0XQdgI2jORaWdu0Ssq0kzjg3j6BRSSyRhlc2BwvFbWU7dcA1imFSjeipt5GCt8xNq_Yr40we7H4IO1OwRzx4tDP_Y1_fGJyVbRBjPBjQ7-BiZHcY9eFEyDhnJ2jl8nWquE5lnyXuZed10LigPXIBQnsL_PNoKJ4a1o28sHUEzQlBqr-tV4tQZclJ0jNzGBbjRRAgHEr_UruIgSTG8kXssgMM9CiU1HHS7n9Kl090Bn6BQr_cNiGRwhkKFmmZKUoug1NPrk_LaK-iQ99lojFPxL8P5rnCYtQnrddl7nNzhc8uwUcshlmwrPsr5_CRGkcstW6ccN8BjVRqL_TI1ld5bFLzHN59FbAJQjYGUc-3nIMMbXuQ1U8a1EeSN4R6Yt7jXlVytsDfxof4a_kK4vhxv3kWob0RhuA_qcn8n2_0ahUzyCzV4_ud3cTMvBufGPIrzTUAIXwjzJyFLcLt6CG-tmr7cfLeZ7aYL3IKVJF2KcFqceu5c1GT45skQPF1rKr5xafPge_W2XVxkQwwNVJFTkoea3erVEL2HX6OKIx6dgJ9RNMtmTmN2JFMsMGULAo0VXGRQVcPz4v4vkn4Lo4dGL0UWZaS9o7eqGacyMw7cMChNGVfYzIkkmYj-Mu5Kob_iBBCKYKrhsZwoW8hJIfAZGKBrWgXsOUNTlvc_HZShvUfg_Lac2QZzZJ4UsFk1uQ=s96-c'

const Index = () => (
  <div>
    Reproduction for{' '}
    <a href="https://github.com/nrwl/nx/issues/4990">
      https://github.com/nrwl/nx/issues/4990
    </a>
    <br />
    <Dropdown
      name="Please select a value to change the above input"
      options={[
        { key: 'Marathon', value: 1 },
        { key: 'Sprint', value: 2 },
        { key: '5K Run', value: 3 },
        { key: '400m', value: 4 },
      ]}
      onSelect={(value) => console.log('You selected: ', value)}
    />
    <Image src={IMAGE_URL} width={30} height={30} />
  </div>
)

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Index
