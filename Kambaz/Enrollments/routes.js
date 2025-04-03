import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.delete("/api/enrollments/:enrollmentId", async (req, res) => {
        const { enrollmentId } = req.params;
        const status = await dao.deleteEnrollment(enrollmentId);
        res.send(status);
    });
    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.send(enrollments);
    });
}