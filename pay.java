import org.springframework.util.DigestUtils;

import java.util.*;

public class SignUtil {
    public static String sign(Map<String,String> map, String privateKey){
        Collection<String> keyset= map.keySet();
        List<String> keyList= new ArrayList<>(keyset);
        Collections.sort(keyList);
        StringBuilder sb = new StringBuilder();
        for (String key : keyList){
            sb.append(key).append("=").append(map.get(key)).append("&");
        }
        sb.append("key=").append(privateKey);
        return DigestUtils.md5DigestAsHex(sb.toString().getBytes());
    }
}

// --------------------------------------------

Map<String, String> map = new HashMap<>();
map.put("body", body);
map.put("mchid", mchid);
map.put("notify_url", notifyURL);
map.put("openid", openId);
map.put("out_trade_no", outTradeNo);
map.put("total_fee", "" + totalFee);

String md5 = SignUtil.sign(map, payJSConfig.getKey());

map.put("sign", md5.toUpperCase());
map.put("body", map.get("body"));
map.put("notify_url", map.get("notify_url"));

// String result = HttpInvoker.readContentFromPost("https://payjs.cn/api/jsapi", map);