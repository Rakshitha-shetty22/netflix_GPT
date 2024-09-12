import { useSelector } from 'react-redux';
import OpenAI from 'openai';

const useOpenAi = () => {
  const apikey = useSelector((store) => store.user.openAIkey);
  return new OpenAI({
    apiKey: apikey,
    dangerouslyAllowBrowser: true,
  });
};

export default useOpenAi;
