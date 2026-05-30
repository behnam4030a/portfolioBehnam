import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Snackbar,
    Alert,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { MdEmail, MdPerson, MdSend, MdSubject } from "react-icons/md";

const RECIPIENT = "behnam.4030a@gmail.com";

const initialForm = { name: "", subject: "", message: "" };
const initialErrors = { name: "", subject: "", message: "" };

const ContactMe = () => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
    const [snackbar, setSnackbar] = useState({ open: false, severity: "success" });

    const validate = () => {
        const newErrors = { ...initialErrors };
        if (!form.name.trim()) newErrors.name = "نام الزامی است";
        if (!form.subject.trim()) newErrors.subject = "موضوع الزامی است";
        if (!form.message.trim()) newErrors.message = "پیام الزامی است";
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const mailtoLink = `mailto:${RECIPIENT}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`از طرف: ${form.name}\n\n${form.message}`)}`;
        window.location.href = mailtoLink;
        setSnackbar({ open: true, severity: "success" });
        setForm(initialForm);
    };

    return (
        <Card sx={{ height: "100vh", overflow: "auto" }}>
            <CardContent>
                <Divider textAlign="center" sx={{ mb: 3 }}>
                    <Chip color="primary" label={
                        <Typography variant="body1">ارتباط با من</Typography>
                    } />
                </Divider>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 3 }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                        <MdEmail size={20} />
                        <Typography variant="body2" color="text.secondary">{RECIPIENT}</Typography>
                    </Box>

                    <FormControl fullWidth error={!!errors.name}>
                        <InputLabel htmlFor="name">نام شما</InputLabel>
                        <OutlinedInput
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            label="نام شما"
                            startAdornment={<MdPerson size={18} style={{ marginLeft: 8 }} />}
                        />
                        {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
                    </FormControl>

                    <FormControl fullWidth error={!!errors.subject}>
                        <InputLabel htmlFor="subject">موضوع</InputLabel>
                        <OutlinedInput
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            label="موضوع"
                            startAdornment={<MdSubject size={18} style={{ marginLeft: 8 }} />}
                        />
                        {errors.subject && <FormHelperText>{errors.subject}</FormHelperText>}
                    </FormControl>

                    <FormControl fullWidth error={!!errors.message}>
                        <InputLabel htmlFor="message">پیام شما</InputLabel>
                        <OutlinedInput
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            label="پیام شما"
                            multiline
                            rows={5}
                        />
                        {errors.message && <FormHelperText>{errors.message}</FormHelperText>}
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<MdSend />}
                        sx={{ borderRadius: 3, py: 1.5 }}
                    >
                        ارسال پیام
                    </Button>
                </Box>
            </CardContent>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="success" variant="filled" onClose={() => setSnackbar((s) => ({ ...s, open: false }))}>
                    در حال باز کردن ایمیل...
                </Alert>
            </Snackbar>
        </Card>
    );
};

export default ContactMe;
